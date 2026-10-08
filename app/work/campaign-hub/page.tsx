import type { Metadata } from 'next';
import { Footer, Section } from '../../components';

export const metadata: Metadata = {
  title: 'Campaign Hub | Nolan Huyck',
  description: 'Per-product margin intelligence for Google Shopping',
  openGraph: { title: 'Campaign Hub | Nolan Huyck', description: 'Per-product margin intelligence for Google Shopping', url: '/work/campaign-hub', type: 'article', siteName: 'Nolan Huyck' },
  alternates: { canonical: '/work/campaign-hub' },
};

export default function CampaignHub() {
  return <div className="measure">
    <header className="case-header"><a href="/" className="back small">Nolan Huyck</a><h1>Campaign Hub</h1><p className="descriptor">Per-product margin intelligence for Google Shopping</p></header>
    <main>
      <Section title="Problem"><p>Google Shopping campaigns optimize toward ROAS, measured on revenue. For a catalog where supplier cost, shipping, and fees vary by SKU, revenue says nothing about whether a product is profitable at its current bid. A campaign can hit its ROAS target and still lose money on half its inventory. The data needed to settle that lives in three systems that do not talk: Google Ads holds spend and conversions, Merchant Center holds the product feed, landed cost sits with the supplier.</p></Section>
      <Section title="Approach"><p>Obtained Google Ads API production access by writing the design document and application myself, approved in under 24 hours. Joined all three sources into one row per product. Computed contribution margin and breakeven conversion rate deterministically in code, per SKU, with no model in the path. Built inline bid editing that writes back through the Ads API with an immutable audit log.</p></Section>
      <Section title="Outcome"><p>Roughly 300 products analyzed. The margin view showed bids and pricing were not the binding constraint; the drop-off was at add-to-cart, where an unbranded storefront with no reviews could not win considered purchases against known brands. The campaign was paused at about $340 of total ad spend. The tool&apos;s value was ending an unprofitable test early and on evidence rather than continuing to fund it.</p></Section>
      <Section title="Stack"><p>Next.js 16 App Router, React 19, TypeScript, Supabase/Postgres with workspace-scoped row-level security, a durable Postgres job queue with leases, retries, backoff, and cancellation, Google Ads API, Merchant Center, OpenAI structured outputs with caching, TanStack Query and Table, Tailwind 4, Zod, Vitest and Playwright.</p></Section>
    </main>
    <Footer />
  </div>;
}
