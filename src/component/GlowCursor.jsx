import React, { useEffect, useState } from 'react';
import '../component/styles/GlowCursor.css';

const GlowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setOpacity(0);
      }, 2000); 
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ left: cursorPosition.x, top: cursorPosition.y, opacity }}
      className="glowing-cursor"
    ></div>
  );
};

export default GlowCursor;
