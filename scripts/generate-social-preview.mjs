import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const sourcePath = resolve("scripts/assets/growdex-social-preview.png.base64");
const outputDirectory = resolve("dist");
const outputPath = resolve(outputDirectory, "growdex-social-preview.png");

const encodedImage = await readFile(sourcePath, "utf8");
const image = Buffer.from(encodedImage.replace(/\s/g, ""), "base64");

const pngSignature = "89504e470d0a1a0a";
if (image.subarray(0, 8).toString("hex") !== pngSignature) {
  throw new Error("The social preview source did not decode to a PNG image.");
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, image);
console.log(`Generated ${outputPath}`);
