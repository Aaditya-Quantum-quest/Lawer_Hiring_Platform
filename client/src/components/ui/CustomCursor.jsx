import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Tail segment count & physics ─── */
const TAIL_LENGTH = 18;
const TAIL_EASE = 0.13;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const tailRef = useRef(
    Array.from({ length: TAIL_LENGTH }, () => ({ x: -200, y: -200 }))
  );
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const [tailPositions, setTailPositions] = useState(
    Array.from({ length: TAIL_LENGTH }, () => ({ x: -200, y: -200 }))
  );

  /* ── Track raw mouse ── */
  const onMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    setPos({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const onMouseDown = useCallback(() => setIsClicking(true), []);
  const onMouseUp = useCallback(() => setIsClicking(false), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);

  /* ── Hover detection on interactive elements ── */
  useEffect(() => {
    const check = (e) => {
      const el = e.target;
      const interactive = el.closest(
        "button, a, [data-hover], input, textarea, select, label, [role='button'], .card"
      );
      setIsHovering(!!interactive);
    };
    window.addEventListener("mousemove", check);
    return () => window.removeEventListener("mousemove", check);
  }, []);

  /* ── Tail animation loop ── */
  useEffect(() => {
    const animate = () => {
      const tail = tailRef.current;
      // First segment follows mouse
      tail[0].x = lerp(tail[0].x, mouseRef.current.x, TAIL_EASE + 0.12);
      tail[0].y = lerp(tail[0].y, mouseRef.current.y, TAIL_EASE + 0.12);
      // Each subsequent segment follows the previous
      for (let i = 1; i < TAIL_LENGTH; i++) {
        tail[i].x = lerp(tail[i].x, tail[i - 1].x, TAIL_EASE - i * 0.003);
        tail[i].y = lerp(tail[i].y, tail[i - 1].y, TAIL_EASE - i * 0.003);
      }
      setTailPositions(tail.map((p) => ({ ...p })));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter]);

  /* ── Outer ring size ── */
  const outerSize = isClicking ? 28 : isHovering ? 52 : 36;
  const outerOpacity = isClicking ? 0.95 : isHovering ? 0.85 : 0.7;

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        /* Outer ring */
        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          border-radius: 50%;
          border: 1.5px solid #F0A500;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
          transition:
            width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity 0.2s ease,
            border-color 0.3s ease,
            box-shadow 0.35s ease,
            background 0.3s ease;
        }

        .cursor-ring.hovering {
          border-color: #FFD166;
          background: rgba(240, 165, 0, 0.08);
          box-shadow:
            0 0 18px rgba(240, 165, 0, 0.5),
            0 0 36px rgba(240, 165, 0, 0.2),
            inset 0 0 12px rgba(240, 165, 0, 0.1);
        }

        .cursor-ring.clicking {
          border-color: #FFB800;
          background: rgba(255, 184, 0, 0.18);
          box-shadow:
            0 0 28px rgba(255, 184, 0, 0.8),
            0 0 56px rgba(255, 184, 0, 0.35);
        }

        /* Center dot */
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #FFD166;
          pointer-events: none;
          z-index: 100000;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
          box-shadow: 0 0 8px rgba(255, 209, 102, 0.9), 0 0 16px rgba(255, 184, 0, 0.5);
        }

        .cursor-dot.clicking {
          width: 8px; height: 8px;
          background: #fff;
          box-shadow: 0 0 12px #fff, 0 0 24px #FFD166;
        }

        /* Tail segment */
        .cursor-tail-seg {
          position: fixed;
          top: 0; left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
      `}</style>

      {/* ── Tail segments ── */}
      {tailPositions.map((tp, i) => {
        const progress = i / TAIL_LENGTH;
        const size = Math.max(1.5, 5 * (1 - progress));
        const opacity = (1 - progress) * 0.55;
        const gold = `rgba(240, 165, 0, ${opacity})`;
        return (
          <div
            key={i}
            className="cursor-tail-seg"
            style={{
              left: tp.x,
              top: tp.y,
              width: size,
              height: size,
              background: gold,
              boxShadow: `0 0 ${size * 2}px ${gold}`,
            }}
          />
        );
      })}

      {/* ── Outer expanding ring ── */}
      <div
        className={`cursor-ring ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: pos.x,
          top: pos.y,
          width: outerSize,
          height: outerSize,
          opacity: outerOpacity,
        }}
      />

      {/* ── Center dot ── */}
      <div
        className={`cursor-dot ${isClicking ? "clicking" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
