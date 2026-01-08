import { useState, useEffect, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (ref?: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      } else {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    const element = ref?.current || window;
    element.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [ref]);

  return mousePosition;
};
