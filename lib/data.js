// All site content lives here. Edit names, descriptions and photos in one place.
// Photos are in /public/img. Replace a file with the same name to swap a photo.

export const SITE = {
  name: 'La Vaquita',
  sub: 'Paletería y Nevería',
  street: '1103 Jenks Ave',
  city: 'Panama City, FL 32401',
  hours: '11:00 AM – 10:00 PM',
  days: 'Mon – Sun',
  phone: '(850) 123-4567', // placeholder from the mockup: replace with the real number
  directions: 'https://www.google.com/maps/dir/?api=1&destination=1103+Jenks+Ave+Panama+City+FL+32401',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/visit', label: 'Visit Us' },
  { href: '/contact', label: 'Contact' },
];

export const CATS = [
  { id: 'ice', name: 'Ice Cream', tag: 'Creamy. Dreamy. Irresistible.', bg: 'linear-gradient(160deg,#f0568f,#f58bae)', img: 'c-ice', deco: 'ice-top', ar: '2.08' },
  { id: 'paletas', name: 'Paletas', tag: 'Fresh fruit. Real flavor.', bg: 'linear-gradient(160deg,#f9b52b,#fbc94f)', img: 'c-pal', dark: true, deco: 'pal-top', ar: '3.24' },
  { id: 'churros', name: 'Churros & Specialties', tag: 'A classic, the La Vaquita way.', bg: 'linear-gradient(160deg,#4b2414,#6a3620)', img: 'c-chu', cardAr: '306/98' },
  { id: 'drinks', name: 'Drinks & More', tag: 'Cool sips. Sweet moments.', bg: 'linear-gradient(160deg,#19b3c6,#4cc7d4)', img: 'c-dri' },
];

export const ITEMS = [
  { id: 'cookies-cream', cat: 'ice', name: 'Cookies & Cream', desc: 'Classic cookies with rich vanilla ice cream.', img: 'ice0' },
  { id: 'strawberry-bliss', cat: 'ice', name: 'Strawberry Bliss', desc: 'Fresh strawberries in every scoop.', img: 'ice1' },
  { id: 'mango-delight', cat: 'ice', name: 'Mango Delight', desc: 'Real mango. Real flavor.', img: 'ice2' },
  { id: 'chocolate-crush', cat: 'ice', name: 'Chocolate Crush', desc: 'Rich chocolate with premium toppings.', img: 'ice3' },
  { id: 'fresa', cat: 'paletas', name: 'Fresa', desc: 'Fresh strawberry paleta.', img: 'pal0' },
  { id: 'mangonada', cat: 'paletas', name: 'Mangonada', desc: 'Mango with chili.', img: 'pal1' },
  { id: 'limon', cat: 'paletas', name: 'Limón', desc: 'Refreshing lime paleta.', img: 'pal2' },
  { id: 'sandia', cat: 'paletas', name: 'Sandía', desc: 'Fresh watermelon.', img: 'pal3' },
  { id: 'churro-split', cat: 'churros', name: 'Churro Split', tag: 'A classic, the La Vaquita way.', desc: 'Warm churros, creamy ice cream, fresh strawberries, whipped cream, chocolate sauce and a cherry on top.', img: 'churro-sq', hero: 'churro-hero', badges: ['Popular', 'Signature', 'Must Try'] },
  { id: 'banana-split', cat: 'churros', name: 'Banana Split', desc: 'Scoops, chocolate drizzle and a cherry.', img: 'also0', tall: true },
  { id: 'elote-ice-cream', cat: 'churros', name: 'Elote Ice Cream', desc: 'Sweet corn ice cream, a Mexican favorite.', img: 'also1', tall: true },
  { id: 'cookie-monster', cat: 'churros', name: 'Cookie Monster', desc: 'Blue ice cream loaded with cookies.', img: 'also2', tall: true },
  { id: 'fresas-con-crema', cat: 'churros', name: 'Fresas con Crema', desc: 'Strawberries and sweet cream.', img: 'also3', tall: true },
];

export const GALLERY_FILTERS = [
  ['all', 'All'], ['ice', 'Ice Cream'], ['paletas', 'Paletas'], ['churros', 'Churros'], ['drinks', 'Drinks'], ['shop', 'Our Shop'],
];

export const GALLERY = [
  ['hero', 'shop'], ['churro-sq', 'churros'], ['store-home', 'shop'], ['g-also2', 'ice'], ['g-pal3', 'paletas'],
  ['g-c-dri', 'drinks'], ['moment', 'ice'], ['g-ice1', 'ice'], ['store-story', 'shop'], ['g-also1', 'drinks'],
  ['g-pal0', 'paletas'], ['churro-hero', 'churros'], ['g-ice2', 'ice'], ['g-also3', 'ice'], ['store-visit', 'shop'],
  ['g-pal2', 'paletas'], ['g-also0', 'ice'], ['g-ice3', 'ice'], ['story-top', 'paletas'], ['g-ice0', 'ice'],
];

export const STRIP = ['g-also2', 'g-also3', 'g-ice2', 'g-also1', 'churro-sq', 'g-pal0', 'g-also0', 'g-pal3'];

export const img = (n) => `/img/${n}.jpg`;
export const bg = (n) => ({ '--im': `url(/img/${n}.jpg)` });
export const getCat = (id) => CATS.find((c) => c.id === id);
