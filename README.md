# La Vaquita Paletería y Nevería

Next.js (App Router) website.

## Run it

Needs Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production: `npm run build` then `npm start`.

## Where things are

| What | File |
| --- | --- |
| Menu items, address, hours, phone, gallery list | `lib/data.js` |
| Photos and logo | `public/img/` |
| Colors, fonts, all styling | `app/globals.css` (tokens at the top) |
| Pages | `app/` (`page.js`, `menu`, `menu/[id]`, `our-story`, `gallery`, `visit`, `contact`) |
| Nav, footer, cards, form | `components/` |

## Before going live

- Replace the photos in `public/img/` with full-resolution originals (keep the file names). The current ones were cut from the design mockups and are low resolution.
- Set the real phone number in `lib/data.js`.
- Connect the contact form (`components/ContactForm.js`) to an email service or API route. It does not send anything yet.
- Add drinks to `ITEMS` in `lib/data.js` with `cat: 'drinks'`.
