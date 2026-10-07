import Link from 'next/link';
import { NAV, SITE } from '@/lib/data';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <Link href="/" className="brand" aria-label="La Vaquita home"><Logo tone="light" /></Link>
          <div style={{ fontSize: 14 }}><b>{SITE.street}</b><br />{SITE.city}<br />{SITE.days} · {SITE.hours}</div>
          <nav aria-label="Footer">
            {NAV.map((n) => (<Link key={n.href} href={n.href}>{n.label}</Link>))}
          </nav>
        </div>
        <p className="big-word" aria-hidden="true">{SITE.name}</p>
        <p className="fine">Good ice cream, brighter days. © {SITE.name} {SITE.sub}.</p>
      </div>
    </footer>
  );
}
