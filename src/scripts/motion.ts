// Shared runtime for the looping section animations on the home page.

// A loop plays while ANY of its parts is in the middle 80% of the screen.
// One animation can be split across several cards on mobile (e.g. reasons:
// terminals + offline queue), and some blocks are taller than three screens,
// so there is no "30% visible" threshold — it would freeze them mid-animation.
const loops = new Map<Element, gsap.core.Timeline>();
const onScreen = new Set<Element>();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) =>
      entry.isIntersecting
        ? onScreen.add(entry.target)
        : onScreen.delete(entry.target)
    );
    // only touch the timelines whose parts just changed, so other pauses
    // (e.g. the category slider held on hover) are left alone
    new Set(entries.map((entry) => loops.get(entry.target))).forEach(
      (timeline) => {
        if (!timeline) return;
        const visible = [...loops].some(
          ([el, tl]) => tl === timeline && onScreen.has(el)
        );
        visible ? timeline.play() : timeline.pause();
      }
    );
  },
  { rootMargin: "-10% 0px" }
);

/** Play `timeline` only while one of `parts` is on screen. */
export function playWhileVisible(
  timeline: gsap.core.Timeline,
  ...parts: Element[]
) {
  parts.forEach((part) => {
    loops.set(part, timeline);
    observer.observe(part);
  });
}

/** Stop a loop for good (e.g. once the visitor takes over a slider). */
export function stopLoop(...parts: Element[]) {
  parts.forEach((part) => {
    loops.get(part)?.pause();
    loops.delete(part);
    observer.unobserve(part);
  });
}

/** Whether `part` still drives a running loop. */
export const isLooping = (part: Element) => loops.has(part);

// One debounced resize listener for every section that needs to re-measure.
const resizeHandlers: Array<() => void> = [];
let resizeTimer = 0;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(
    () => resizeHandlers.forEach((handler) => handler()),
    200
  );
});

/** Run `handler` after the window stops resizing. */
export function onResize(handler: () => void) {
  resizeHandlers.push(handler);
}
