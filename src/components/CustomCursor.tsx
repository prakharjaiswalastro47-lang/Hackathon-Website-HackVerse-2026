import { useEffect } from 'react';

const cursor = document.createElement('div');

export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #3b82f6;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s, background 0.2s, border-color 0.2s;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  document.querySelectorAll('a, button, input, textarea, select').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.background = 'rgba(59, 130, 246, 0.2)';
      cursor.style.borderColor = '#d946ef';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'transparent';
      cursor.style.borderColor = '#3b82f6';
    });
  });
}

export function CustomCursor() {
  useEffect(() => {
    initCustomCursor();
    return () => {
      const c = document.getElementById('custom-cursor');
      if (c) c.remove();
    };
  }, []);
  return null;
}
