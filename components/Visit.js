import Link from 'next/link';
import { SITE } from '@/lib/data';
import { Arrow, Pin, PinSolid, Clock, Phone } from './Icons';

export function VisitInfo() {
  return (
    <>
      <ul className="info">
        <li><Pin /><span><b>{SITE.street}</b>{SITE.city}</span></li>
        <li><Clock /><span><b>{SITE.days}</b>{SITE.hours}</span></li>
        <li><Phone /><span><b><a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>{SITE.phone}</a></b>Call for today&apos;s flavors</span></li>
      </ul>
      <div className="cta">
        <a className="btn btn-p" href={SITE.directions} target="_blank" rel="noopener noreferrer">Get Directions <Arrow /></a>
        <Link className="btn btn-o" href="/contact">Contact Us <Phone /></Link>
      </div>
    </>
  );
}

// Illustrated map. To use a live Google Map instead, replace the <svg> with an
// <iframe src="https://www.google.com/maps?q=1103+Jenks+Ave+Panama+City+FL+32401&output=embed" />.
export function MapCard() {
  return (
    <div className="map">
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="600" height="340" fill="#e9eef0" />
        <path d="M0 250 Q90 210 150 260 T260 340 H0z" fill="#a9d7f2" />
        <g stroke="#fff" strokeWidth="14" fill="none"><path d="M-20 60 620 150M-20 150 620 240M120 -20 60 360M270 -20 210 360M420 -20 360 360M570 -20 510 360" /></g>
        <g stroke="#fff" strokeWidth="6" fill="none"><path d="M-20 10 620 100M-20 105 620 195M-20 200 620 290M195 -20 135 360M345 -20 285 360M495 -20 435 360" /></g>
      </svg>
      <div className="pin"><PinSolid /><span><b>{SITE.name}</b>{SITE.street}<br />{SITE.city}</span></div>
    </div>
  );
}
