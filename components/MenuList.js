'use client';
import { useState } from 'react';
import { CATS, ITEMS, bg } from '@/lib/data';
import Tile from './Tile';

export default function MenuList({ initial = 'all' }) {
  const [f, setF] = useState(initial);
  const chips = [['all', 'All'], ...CATS.map((c) => [c.id, c.name])];
  return (
    <>
      <div className="chips" role="group" aria-label="Filter menu">
        {chips.map(([id, n]) => (
          <button key={id} className="chip" aria-pressed={f === id} onClick={() => setF(id)}>{n}</button>
        ))}
      </div>
      {CATS.filter((c) => f === 'all' || f === c.id).map((c) => {
        const items = ITEMS.filter((i) => i.cat === c.id);
        return (
          <div className="mgroup" key={c.id}>
            <div className="mgroup-h">
              <div><h2>{c.name}</h2><p>{c.tag}</p></div>
              {c.deco && <div className="deco" style={{ ...bg(c.deco), '--ar': c.ar }} />}
            </div>
            {items.length ? (
              <div className="tiles">{items.map((i) => (<Tile key={i.id} item={i} />))}</div>
            ) : (
              <div className="soon">
                <div />
                <p><b>Frappés, shakes and aguas frescas.</b><br />Ask us about today&apos;s drinks when you stop by.</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
