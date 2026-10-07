import Link from 'next/link';
import { CATS, STRIP, bg } from '@/lib/data';
import { Arrow, PinSolid } from '@/components/Icons';
import { VisitInfo, MapCard } from '@/components/Visit';
import { Marquee, SpinBadge, Burst } from '@/components/Fun';
import HeroParallax from '@/components/HeroParallax';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">Fresh · Sweet · Natural</span>
            <h1>Taste the <span className="pk">sweet side</span> of the coast.</h1>
            <p className="lead">Fresh, fun, Florida-made.</p>
            <p className="sub">Handcrafted ice creams, paletas, churros, and more, bringing a little taste of Mexico to Panama City.</p>
            <div className="cta">
              <Link className="btn btn-p" href="/menu">Explore the Menu <Arrow /></Link>
              <Link className="btn btn-o" href="/visit">Find Us <PinSolid /></Link>
            </div>
            <p className="loved"><span className="hearts">♥♥♥</span> Loved by our community</p>
          </div>
          <p className="hand note">Good<br />Ice Cream<br />Brighter<br />Days</p>
        </div>
        <SpinBadge />
        <HeroParallax />
        <div className="hero-img" role="img" aria-label="A La Vaquita cup piled with strawberry and vanilla ice cream, cookies, waffle and chocolate" />
      </div>

      <div className="sheet">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">Our Menu</span>
              <h2 style={{ marginTop: 10 }}><span className="pk squig">Sweet Cravings</span><br />for Every Mood</h2>
            </div>
            <p className="blurb">From creamy ice creams to refreshing paletas, indulgent churros and unique creations, there&apos;s always a reason to treat yourself.</p>
            <Link className="btn btn-o" href="/menu">View Full Menu <Arrow /></Link>
          </div>
          <div className="cats">
            {CATS.map((c) => (
              <Link key={c.id} className={`cat${c.dark ? ' dark-t' : ''}`} href={`/menu?cat=${c.id}`} style={{ '--bg': c.bg }}>
                <h3>{c.name}</h3>
                <p>{c.tag}</p>
                <div className="ph" style={{ ...bg(c.img), ...(c.cardAr ? { '--ar': c.cardAr } : {}) }} />
                <span className="arrow"><Arrow w={3} /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="moment">
            <Burst>Must<br />Try!</Burst>
            <div className="txt">
              <span className="eyebrow">Today&apos;s Craving</span>
              <h2>Churro Split</h2>
              <p className="big">A classic, the La Vaquita way.</p>
              <p style={{ maxWidth: 360, fontSize: 14 }}>Warm churros, creamy ice cream, fresh strawberries, whipped cream, chocolate sauce and a cherry on top.</p>
              <Link className="btn btn-w" href="/menu/churro-split">Try It <Arrow /></Link>
            </div>
            <div className="pic" role="img" aria-label="Churro Split sundae" />
          </div>
        </div>
      </div>

      <Marquee tone="mango" tilt={-2} items={['Fresh fruit', 'Real flavor', 'Made in Panama City', 'Hecho con amor', 'Treat yourself']} />

      <div className="sec band band-blush">
        <div className="wrap teaser">
          <div className="pic" role="img" aria-label="The La Vaquita storefront at sunset" />
          <div className="txt">
            <span className="eyebrow">Our Story</span>
            <h2>More than ice cream. <span className="pk">It&apos;s a feeling.</span></h2>
            <p>La Vaquita is a family-inspired paletería y nevería bringing authentic flavors, fresh ingredients, and a whole lot of joy to Panama City.</p>
            <Link className="btn btn-p" href="/our-story">Our Story <Arrow /></Link>
            <p className="hand">Made with Love.<br />Real Flavors. <span className="pk">♥</span></p>
          </div>
        </div>
      </div>

      <div className="sec band band-mango">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow">From Our Kitchen</span>
              <h2 style={{ marginTop: 10 }}>Moments That Make<br /><span className="pk squig">Life Sweeter</span> ♥</h2>
            </div>
            <Link className="btn btn-o" href="/gallery" style={{ marginLeft: 'auto' }}>See the Gallery <Arrow /></Link>
          </div>
          <div className="strip">
            {STRIP.map((n) => (<div key={n} style={bg(n)} />))}
          </div>
        </div>
      </div>

      <div className="sec band band-sky">
        <div className="wrap visit">
          <div>
            <h2><span className="pk">Come Chill</span><br />With Us!</h2>
            <VisitInfo />
          </div>
          <MapCard />
        </div>
      </div>
    </>
  );
}
