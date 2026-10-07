import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ITEMS, bg, getCat } from '@/lib/data';
import { Arrow, HeartSolid } from '@/components/Icons';
import Tile from '@/components/Tile';

export function generateStaticParams() {
  return ITEMS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = ITEMS.find((i) => i.id === id);
  return { title: p ? p.name : 'Menu' };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = ITEMS.find((i) => i.id === id);
  if (!p) notFound();
  const c = getCat(p.cat);
  const also = ITEMS.filter((i) => i.id !== p.id && i.tall).slice(0, 4);
  return (
    <>
      <div className="prod">
        <div className="art" style={bg(p.hero || p.img)} />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/menu">Menu</Link><span>›</span>
            <Link href={`/menu?cat=${c.id}`}>{c.name}</Link><span>›</span>
            <span>{p.name}</span>
          </nav>
          <h1>{p.name}</h1>
          <p className="tag">{p.tag || c.tag}</p>
          <p className="desc">{p.desc}</p>
          <div className="badges">
            {(p.badges || ['Customer Favorite']).map((b) => (<span className="badge" key={b}><HeartSolid />{b}</span>))}
          </div>
          <Link className="btn btn-w" href="/visit">Find Us / Order <Arrow /></Link>
          <p className="hand">Sweet Happiness<br />in Every Bite ♥</p>
        </div>
      </div>
      <div className="sheet">
        <div className="wrap also">
          <h2>You Might Also Like</h2>
          <div className="tiles">{also.map((i) => (<Tile key={i.id} item={i} />))}</div>
        </div>
      </div>
    </>
  );
}
