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

## Profile links

The resume is included at `public/Nolan_Huyck_Resume.pdf`. LinkedIn links point to `https://www.linkedin.com/in/nolanhuyck/`.

## Vercel

Import `no1ar1/nolanhuyck.com` into Vercel. Use the Next.js framework preset and `npm run build`. Leave the output directory override disabled so Vercel handles the static export automatically. Add `nolanhuyck.com` in project domain settings and apply the DNS records Vercel provides. No environment variables are required.
