/// <reference types="gsap" />
// Shared helpers for the looping section animations on the home page.
// (The reference above loads GSAP's global types for gsap.core.Timeline.)

/**
 * Play `timeline` while any of `parts` is in the middle 80% of the screen,
 * pause it otherwise. Several parts, because on mobile one animation can be
 * split across separate cards. Returns a function that stops the loop for good.
 */
export function playWhileVisible(
  timeline: gsap.core.Timeline,
  ...parts: Element[]
) {
  const visible = new Set<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting
          ? visible.add(entry.target)
          : visible.delete(entry.target)
      );
      visible.size ? timeline.play() : timeline.pause();
    },
    { rootMargin: "-10% 0px" }
  );
  parts.forEach((part) => observer.observe(part));

  return () => {
    observer.disconnect();
    timeline.pause();
  };
}

/** Run `handler` 200ms after the window stops resizing. */
export function onResize(handler: () => void) {
  let timer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = window.setTimeout(handler, 200);
  });
}
