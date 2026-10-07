import Link from 'next/link';
import { SITE } from '@/lib/data';
import { Cone, PinSolid, Phone } from './Icons';

// Phone-only quick actions pinned to the bottom of the screen.
export default function MobileBar() {
  return (
    <nav className="mbar" aria-label="Quick actions">
      <Link href="/menu"><Cone />Menu</Link>
      <a className="go" href={SITE.directions} target="_blank" rel="noopener noreferrer"><PinSolid />Directions</a>
      <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}><Phone />Call</a>
    </nav>
  );
}
