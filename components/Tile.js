import Link from 'next/link';
import { bg } from '@/lib/data';
import { Arrow } from './Icons';

export default function Tile({ item }) {
  return (
    <Link className={`tile t-${item.cat}`} href={`/menu/${item.id}`} aria-label={`${item.name}: view details`}>
      <div className={`ph${item.tall ? ' tall' : ''}`} style={bg(item.img)}>
        <span className="arrow"><Arrow w={3} /></span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
    </Link>
  );
}
