'use client';
import { useEffect } from 'react';

// Desktop-only: nudges the hero photo and badge with the mouse for a little depth.
// Writes --px/--py on .hero; the CSS decides how far each layer moves.
export default function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const move = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        hero.style.setProperty('--px', x.toFixed(3));
        hero.style.setProperty('--py', y.toFixed(3));
      });
    };
    const reset = () => {
      hero.style.setProperty('--px', 0);
      hero.style.setProperty('--py', 0);
    };
    hero.addEventListener('mousemove', move);
    hero.addEventListener('mouseleave', reset);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener('mousemove', move);
      hero.removeEventListener('mouseleave', reset);
    };
  }, []);
  return null;
}
