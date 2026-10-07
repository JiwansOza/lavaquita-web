// Decorative pieces: flavor ribbon, spinning sticker and starburst. All aria-hidden.

export function Marquee({ items, tone = 'pink', tilt = 0, drip = false }) {
  const row = items.map((t, k) => (<span key={k}>{t}<i>✦</i></span>));
  return (
    <div className={`marquee m-${tone}${drip ? ' drip' : ''}`} style={{ '--tilt': `${tilt}deg` }} aria-hidden="true">
      <div className="track">{row}{row}</div>
    </div>
  );
}

export function SpinBadge({ text = 'Handcrafted • Fresh Daily • Panama City • ' }) {
  return (
    <div className="spin-badge" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs><path id="sb-circle" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" /></defs>
        <text><textPath href="#sb-circle" textLength="488">{text.toUpperCase()}</textPath></text>
      </svg>
      <img src="/img/cow.jpg" alt="" />
    </div>
  );
}

export function Burst({ children, className = '' }) {
  return (<div className={`burst ${className}`} aria-hidden="true"><span>{children}</span></div>);
}
