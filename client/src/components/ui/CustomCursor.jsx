import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Base mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Offset for the dot (8px x 8px -> 4px center)
  const dotX = useTransform(cursorX, x => x - 4);
  const dotY = useTransform(cursorY, y => y - 4);
  
  // Offset for the circle (40px x 40px -> 20px center)
  const circleBaseX = useTransform(cursorX, x => x - 20);
  const circleBaseY = useTransform(cursorY, y => y - 20);
  
  // Smooth spring physics for the circle
  const cursorXSpring = useSpring(circleBaseX, { damping: 25, stiffness: 120, mass: 0.5 });
  const cursorYSpring = useSpring(circleBaseY, { damping: 25, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle (Tail effect) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full border border-[var(--color-secondary)] bg-transparent mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[var(--color-primary)] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY
        }}
      />
    </>
  );
};

export default CustomCursor;
