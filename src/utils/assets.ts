import type { ImageMetadata } from "astro";

// Every image under src/assets/images/ (subfolders included), loaded once as
// ImageMetadata so it works with Astro's <Image> (webp, srcset, intrinsic size).
// The glob pattern must be a literal string — Vite resolves it at build time.
const images = import.meta.glob<ImageMetadata>(
  "/src/assets/images/**/*.{png,jpg,jpeg,svg,webp,avif,gif}",
  { eager: true, import: "default" },
);

/**
 * Get one image by its path inside src/assets/images/.
 *
 *   $image("/st-1.svg")
 *   $image("/feature-1@2x.png")
 *   $image("/choices/logo-1.svg")
 *
 * Throws at build time if the file is missing — same safety as a direct import.
 */
export function $image(path: string): ImageMetadata {
  const img = images[`/src/assets/images${path}`];
  if (!img) {
    const available = Object.keys(images)
      .map((p) => p.replace("/src/assets/images", ""))
      .join(", ");
    throw new Error(`Image not found: "${path}". Available: ${available}`);
  }
  return img;
}
