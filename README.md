# nolanhuyck.com

Two static pages built with Next.js App Router, TypeScript, and Tailwind CSS. All page content is rendered at build time. The homepage console note is the only custom client component.

## Local development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Verification and export

```sh
npm run typecheck
npm run build
```

The static site is exported to `out/`.

## Before publishing

- Add the actual resume at `public/Nolan_Huyck_Resume.pdf`. It was not supplied with the build prompt, so no substitute resume is included.
- Replace `LINKEDIN_URL_PLACEHOLDER` in `app/components.tsx` with the intended profile URL.

## Vercel

Import `no1ar1/nolanhuyck.com` into Vercel. Use the Next.js framework preset, `npm run build`, and the `out` output directory. Add `nolanhuyck.com` in project domain settings and apply the DNS records Vercel provides. No environment variables are required.
