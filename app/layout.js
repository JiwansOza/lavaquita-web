import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import MobileBar from '@/components/MobileBar';
import { Marquee } from '@/components/Fun';

export const metadata = {
  title: { default: 'La Vaquita Paletería y Nevería', template: '%s | La Vaquita' },
  description: 'Handcrafted ice creams, paletas, churros and more in Panama City, Florida.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,600..900,0..100,0..1&family=Manrope:wght@400;500;600;700;800&family=Caveat:wght@600;700&family=Pacifico&display=swap" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Marquee items={['Helados', 'Paletas', 'Churros', 'Aguas Frescas', 'Mangonadas', 'Fresas con Crema', 'Good Ice Cream, Brighter Days']} drip />
        <Footer />
        <MobileBar />
        <Reveal />
      </body>
    </html>
  );
}
