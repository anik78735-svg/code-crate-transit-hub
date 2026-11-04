import { useEffect } from "react";

const TILT_SELECTOR = ".tp-card";

/**
 * Site-wide 3D pointer effects: cards tilt toward the cursor with real
 * perspective (CSS custom props consumed in styles.css). Purely visual;
 * mounted once in the root route. Skipped for touch devices and users who
 * prefer reduced motion.
 */
export function Scene3dEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current: HTMLElement | null = null;
    let frame = 0;

    const reset = () => {
      if (!current) return;
      current.style.setProperty("--tp-rx", "0deg");
      current.style.setProperty("--tp-ry", "0deg");
      current = null;
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const card = target?.closest<HTMLElement>(TILT_SELECTOR) ?? null;
      if (card !== current) {
        reset();
        current = card;
      }
      if (!current || frame) return;
      const { clientX, clientY } = e;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!current) return;
        const rect = current.getBoundingClientRect();
        const px = (clientX - rect.left) / rect.width - 0.5;
        const py = (clientY - rect.top) / rect.height - 0.5;
        current.style.setProperty("--tp-ry", `${(px * 10).toFixed(2)}deg`);
        current.style.setProperty("--tp-rx", `${(-py * 10).toFixed(2)}deg`);
      });
    };

    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      if (frame) cancelAnimationFrame(frame);
      reset();
    };
  }, []);

  return null;
}
