import { useRef } from "react";

export default function useSwipe(onSwipeLeft, onSwipeRight) {
  const startX = useRef(0);
  const dragging = useRef(false);

  const onTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (!dragging.current) return;
  };

  const onTouchEnd = (e) => {
    if (!dragging.current) return;
    dragging.current = false;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) < 50) return; // minimum swipe distance

    if (diff > 0) onSwipeLeft();     // swipe left → next slide
    else onSwipeRight();             // swipe right → previous slide
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
