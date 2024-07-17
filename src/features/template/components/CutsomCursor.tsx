// src/Circle.js
import { useState, useEffect } from "react";

const CutsomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  const handleMouseClick = (event: MouseEvent) => {
    setIsZoomedOut(!isZoomedOut);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);
  const handleClick = () => {};

  return (
    <div
      onClick={handleClick}
      className={`circle  ${
        isZoomedOut && "scale-75"
      } fixed w-12 h-12 border-2 border-brand-color drop-shadow-md  active:scale-50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[10000000000000000000]`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CutsomCursor;
