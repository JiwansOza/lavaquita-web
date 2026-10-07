import { VisitInfo, MapCard } from '@/components/Visit';

export const metadata = { title: 'Visit Us' };

export default function VisitPage() {
  return (
    <div className="vp">
      <div className="wrap">
        <div className="top">
          <div>
            <h1><span className="pk">Come Chill</span><br />With Us!</h1>
            <VisitInfo />
          </div>
          <div className="pic" role="img" aria-label="La Vaquita storefront" />
        </div>
        <MapCard />
      </div>
    </div>
  );
}
