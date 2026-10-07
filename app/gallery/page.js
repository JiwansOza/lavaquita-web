import GalleryGrid from '@/components/GalleryGrid';

export const metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <div className="ph-hero center">
        <div className="wrap">
          <h1>Gallery</h1>
          <p>Moments, flavors and smiles.</p>
        </div>
      </div>
      <div className="sheet">
        <div className="wrap"><GalleryGrid /></div>
      </div>
    </>
  );
}
