// Brand lockup: cow mark + live-text wordmark, so it stays sharp at any size.
export default function Logo({ tone = 'pink' }) {
  return (
    <span className={`brandmark bm-${tone}`}>
      <img src="/img/cow-mark.png" width="116" height="112" alt="" />
      <span className="wm">
        <b>La Vaquita</b>
        <small>Paletería y Nevería</small>
      </span>
    </span>
  );
}
