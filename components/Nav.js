'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/data';
import { Pin, Burger } from './Icons';
import Logo from './Logo';

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const isOn = (href) => (href === '/' ? path === '/' : path.startsWith(href));
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <div className="nav-in">
          <Link className="logo" href="/" aria-label="La Vaquita home">
            <Logo />
          </Link>
          <nav className={`links${open ? ' open' : ''}`} aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? 'on' : ''}>{n.label}</Link>
            ))}
          </nav>
          <Link className="btn btn-p order" href="/visit">Order / Directions <Pin /></Link>
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}><Burger /></button>
        </div>
      </div>
    </header>
  );
}
