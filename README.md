# Rivo storefront
Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + Lenis + Zustand. Bangla and English (lib/i18n.ts). Photos in public/products.

    npm install
    npm run dev      # http://localhost:3000

Deploy: push to GitHub, import the repo in Netlify (build `npm run build`; Netlify detects Next.js automatically).
Products live in `lib/products.ts`; swap `ProductArt` for real photos later.
Cart state: `lib/store.ts` (Zustand, saved in the browser). WhatsApp checkout: `orderLink` in `lib/products.ts`.
