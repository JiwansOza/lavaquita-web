import Link from 'next/link';
import { bg } from '@/lib/data';
import { Arrow } from '@/components/Icons';

export const metadata = { title: 'Our Story' };

const petals = [[24, 11, 0], [24, 37, 0], [11, 24, 90], [37, 24, 90], [14.8, 14.8, -45], [33.2, 33.2, -45], [33.2, 14.8, 45], [14.8, 33.2, 45]];

export default function StoryPage() {
  return (
    <>
      <div className="ph-hero sky">
        <div className="art" style={bg('story-top')} />
        <div className="wrap">
          <h1>Our <span className="pk">Story</span></h1>
          <p>More than ice cream.<br />It&apos;s a feeling.</p>
        </div>
      </div>
      <div className="sheet">
        <div className="wrap">
          <div className="story-main">
            <div className="pic" role="img" aria-label="La Vaquita storefront with pink neon sign" />
            <div className="txt">
              <h2>A Sweet Story from Panama City <span className="pk">♥</span></h2>
              <p>La Vaquita is a family-inspired paletería y nevería bringing authentic flavors, fresh ingredients, and a whole lot of joy to Panama City. What started as a love for traditional Mexican desserts has grown into a place where families, friends and neighbors come together to enjoy something sweet.</p>
              <Link className="btn btn-p" href="/menu">Taste the Menu <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="wrap grid">
          <div>
            <p className="hand">Made with Love.<br />Real Flavors. <span style={{ color: 'var(--blush-2)' }}>♥</span></p>
            <ul className="vals">
              <li>
                <svg viewBox="0 0 48 48"><path d="M24 44c10-4 15-11 15-19 0-6-5-10-15-10S9 19 9 25c0 8 5 15 15 19z" fill="#f0568f" /><path d="M24 15c-2-5-7-7-11-5 2 4 6 6 11 5zm0 0c2-5 7-7 11-5-2 4-6 6-11 5z" fill="#5fae52" /></svg>
                <b>Fresh Ingredients</b>Always fresh. Always real.
              </li>
              <li>
                <svg viewBox="0 0 48 48">
                  <g fill="#fff8ee">{petals.map(([x, y, r], k) => (<ellipse key={k} cx={x} cy={y} rx={r === 90 ? 8 : 5} ry={r === 90 ? 5 : 8} transform={r && r !== 90 ? `rotate(${r} ${x} ${y})` : undefined} />))}</g>
                  <circle cx="24" cy="24" r="6" fill="#f9b52b" />
                </svg>
                <b>Authentic Flavors</b>Traditional recipes.
              </li>
              <li>
                <svg viewBox="0 0 48 48"><path d="M24 42S6 31 6 18a9.500 9.500 0 0 1 18-4 9.500 9.500 0 0 1 18 4c0 13-18 24-18 24z" fill="none" stroke="#f0568f" strokeWidth="4" strokeLinejoin="round" /></svg>
                <b>Family Inspired</b>Made for our community.
              </li>
              <li>
                <svg viewBox="0 0 48 48"><path d="M25 22c-1 8-2 15-1 23" stroke="#c98a4b" strokeWidth="3.500" fill="none" strokeLinecap="round" /><g fill="#19b3c6"><path d="M24 22C18 14 9 14 4 19c7-1 14 0 20 3z" /><path d="M24 22c6-8 15-8 20-3-7-1-14 0-20 3z" /><path d="M24 22C22 12 14 6 7 7c6 3 12 8 17 15z" /><path d="M24 22c2-10 10-16 17-15-6 3-12 8-17 15z" /></g></svg>
                <b>Panama City</b>Proudly local.
              </li>
            </ul>
          </div>
          <div className="pols">
            <div className="pol"><div style={bg('pol1')} /></div>
            <div className="sign">Good<br />Ice Cream<br />Brighter<br />Days</div>
            <div className="pol"><div style={bg('pol2')} /></div>
          </div>
        </div>
      </div>
    </>
  );
}
