#!/usr/bin/env sh

set -eu

IMAGE_NAME="${IMAGE_NAME:-growdex-frontend:latest}"
CONTAINER_NAME="${CONTAINER_NAME:-growdex-frontend}"
HOST_PORT="${HOST_PORT:-80}"

build_args="--build-arg VITE_API_URL=${VITE_API_URL:-https://api.growdex.ai}"

if [ -n "${VITE_WAITLIST_KEY:-}" ]; then
  build_args="$build_args --build-arg VITE_WAITLIST_KEY=$VITE_WAITLIST_KEY"
fi

echo "Building $IMAGE_NAME from the current checkout..."
# shellcheck disable=SC2086
docker build --pull $build_args -t "$IMAGE_NAME" .

if docker container inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
  echo "Replacing existing container $CONTAINER_NAME..."
  docker rm -f "$CONTAINER_NAME" >/dev/null
fi

docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$HOST_PORT:80" \
  "$IMAGE_NAME" >/dev/null

echo "Waiting for the new container to become healthy..."
attempt=0
while [ "$attempt" -lt 30 ]; do
  if docker exec "$CONTAINER_NAME" wget --quiet --tries=1 --spider http://127.0.0.1/health; then
    echo "Growdex is running on host port $HOST_PORT."
    exit 0
  fi

  attempt=$((attempt + 1))
  sleep 1
done

echo "Deployment failed: the new container did not become healthy." >&2
docker logs "$CONTAINER_NAME" >&2
exit 1
