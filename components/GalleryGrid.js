'use client';
import { useState } from 'react';
import { GALLERY, GALLERY_FILTERS, img } from '@/lib/data';

export default function GalleryGrid() {
  const [f, setF] = useState('all');
  const label = (id) => GALLERY_FILTERS.find((x) => x[0] === id)[1];
  return (
    <>
      <div className="chips mid" role="group" aria-label="Filter gallery">
        {GALLERY_FILTERS.map(([id, n]) => (
          <button key={id} className="chip" aria-pressed={f === id} onClick={() => setF(id)}>{n}</button>
        ))}
      </div>
      <div className="gal">
        {GALLERY.filter((g) => f === 'all' || g[1] === f).map(([n, c]) => (
          <figure key={n}><img src={img(n)} alt={`La Vaquita ${label(c)} photo`} loading="lazy" /></figure>
        ))}
      </div>
    </>
  );
}
