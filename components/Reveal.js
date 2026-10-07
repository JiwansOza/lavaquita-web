'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades sections in as they scroll into view. Content stays visible without JS
// because the hidden state is only applied here.
const SEL = '.head, .cat, .tile, .moment, .teaser > *, .strip > div, .visit > *, .mgroup-h, .story-main, .vals li, .pol, .gal figure, .also h2';

export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = [...document.querySelectorAll(SEL)].filter((el) => !el.classList.contains('in'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => {
      const sibs = [...el.parentElement.children];
      el.style.setProperty('--d', `${Math.min(sibs.indexOf(el), 6) * 70}ms`);
      el.classList.add('rv');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
