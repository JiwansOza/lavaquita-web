import MenuList from '@/components/MenuList';
import { bg, getCat } from '@/lib/data';

export const metadata = { title: 'Menu' };

export default async function MenuPage({ searchParams }) {
  const { cat } = await searchParams;
  const initial = getCat(cat) ? cat : 'all';
  return (
    <>
      <div className="ph-hero">
        <div className="art" style={bg('menu-top')} />
        <div className="wrap">
          <span className="eyebrow">Paletería y Nevería</span>
          <h1 style={{ marginTop: 12 }}>Our <span className="pk">Menu</span></h1>
          <p>Fresh flavors. Sweet moments. Always a good idea.</p>
        </div>
      </div>
      <div className="sheet">
        <div className="wrap">
          <MenuList key={initial} initial={initial} />
        </div>
      </div>
    </>
  );
}
