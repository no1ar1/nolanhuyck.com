import { Footer, Section, SocialLinks } from './components';
import ConsoleNote from './console-note';

export default function Home() {
  return <div className="measure">
    <ConsoleNote />
    <header>
      <h1>Nolan Huyck</h1>
      <p>Computer science at Michigan State University</p>
      <div className="contact small muted"><a href="mailto:nrhuyck@gmail.com">nrhuyck@gmail.com</a><span aria-hidden="true">·</span><a href="tel:+12489740245">(248) 974-0245</a><span aria-hidden="true">·</span><span>East Lansing, MI</span></div>
      <nav className="links small" aria-label="Profile"><SocialLinks resume /></nav>
    </header>
    <main>
      <p className="intro">I build AI systems and internal tools, concept to production, on my own. Most of what I&apos;ve shipped solves the same shape of problem: data that lives in three systems nobody has joined, or manual work that should be a pipeline. Currently taking fixed-scope contract projects.</p>
      <Section title="Work">
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">01</span><a href="/work/campaign-hub">Campaign Hub</a></h3>
          <p className="descriptor">Per-product margin intelligence for Google Shopping</p>
          <p>Joins Google Ads performance, Merchant Center feed data, and supplier landed cost into a single table showing contribution margin and breakeven conversion rate per SKU, with inline bid editing written back through the Ads API and an immutable audit log on every write. I wrote the technical design document and application for Google Ads API production access; Google approved it in under 24 hours.</p>
          <p className="stack small muted">Stack: Next.js, TypeScript, Supabase/Postgres with row-level security, Google Ads API, Merchant Center</p>
        </article>
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">02</span><a href="https://get-bookr.com">Bookr</a></h3>
          <p className="descriptor">AI patient outreach for medical spas</p>
          <p>Outbound campaign engine with webhook reply ingestion, LLM intent classification, grounded reply drafting, and a human approval queue. No AI-generated message reaches a patient without review. Built around the constraints of patient-adjacent communication: CAN-SPAM, TCPA, and a deliberate architecture that keeps protected health information out of the system entirely.</p>
          <p className="stack small muted">Stack: Next.js, Supabase/Postgres, OpenAI structured outputs, Instantly.ai, Resend, Stripe</p>
        </article>
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">03</span>Stone Call</h3>
          <p className="descriptor">AI voice receptionist for small service businesses</p>
          <p>An end-to-end SaaS that answers calls, books appointments, and confirms by SMS. Authentication, onboarding, subscription billing, voice agents, and calendar booking APIs. In production since October 2025.</p>
          <p className="stack small muted">Stack: Next.js, Supabase, Stripe, Twilio/Vapi, n8n, Microsoft Graph</p>
        </article>
      </Section>
      <Section title="How I build"><ul>
        <li>Deterministic code owns anything that has to be correct. Models supply qualitative judgment only.</li>
        <li>Where evidence is missing, the system reports it as unresolved rather than filling the gap.</li>
        <li>Data usually has rules attached. Where the constraint is institutional rather than technical, like what a protocol permits or where data is allowed to live, the architecture starts there instead of working around it later.</li>
        <li>External services fail. Retries, backoff, and durable queues are the default, not a later concern.</li>
      </ul></Section>
      <Section title="Experience">
        <article className="experience"><h3>Stellantis</h3><p className="descriptor">AI / Software Development Intern, Summer 2026</p><p>Built internal AI tools for the Jeep and Dodge business units, and retrieval-augmented generation systems in Databricks for knowledge retrieval across internal document sets.</p></article>
        <article className="experience"><h3>Stone Call LLC</h3><p className="descriptor">Founder, 2025 to present</p><p>Operate an LLC shipping AI products end to end, owning product, architecture, infrastructure, and go-to-market.</p></article>
      </Section>
    </main>
    <Footer />
  </div>;
}
