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
      <p className="intro">I build AI systems end to end, from retrieval pipelines to production deployment. I’m a computer science sophomore at Michigan State, formerly at Stellantis and now a research assistant at MSU’s Terrorism, Extremism and Cybercrime Lab. Currently taking fixed-scope contract projects.</p>
      <Section title="Work">
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">01</span><a href="/work/campaign-hub/">Campaign Hub</a></h3>
          <p className="descriptor">Per-product margin intelligence for Google Shopping</p>
          <p>Joins Google Ads performance, Merchant Center feed data, and supplier landed cost into a single table showing contribution margin and breakeven conversion rate per SKU, with inline bid editing written back through the Ads API and an immutable audit log on every write. I wrote the technical design document and application for Google Ads API production access; Google approved it in under 24 hours.</p>
          <p className="stack small muted">Stack: Next.js, TypeScript, Supabase/Postgres with row-level security, Google Ads API, Merchant Center</p>
          <a className="project-link" href="/work/campaign-hub/">Case study →</a>
        </article>
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">02</span><a href="https://get-bookr.com" target="_blank" rel="noopener noreferrer">Bookr</a></h3>
          <p className="descriptor">AI patient outreach for medical spas</p>
          <p>Outbound campaign engine with webhook reply ingestion, LLM intent classification, grounded reply drafting, and a human approval queue. No AI-generated message reaches a patient without review. Built around the constraints of patient-adjacent communication: CAN-SPAM, TCPA, and a deliberate architecture that keeps protected health information out of the system entirely.</p>
          <p className="stack small muted">Stack: Next.js, Supabase/Postgres, OpenAI structured outputs, Instantly.ai, Resend, Stripe</p>
          <a className="project-link" href="https://get-bookr.com" target="_blank" rel="noopener noreferrer">get-bookr.com →</a>
        </article>
        <article className="project">
          <h3><span className="project-index" aria-hidden="true">03</span>Stone Call</h3>
          <p className="descriptor">AI voice receptionist for small service businesses</p>
          <p>An end-to-end SaaS that answers calls, books appointments, and confirms by SMS. Authentication, onboarding, subscription billing, voice agents, and calendar booking APIs. In production since October 2025. Handles live inbound calls at a 675 ms voice response time, with booking written straight into Outlook and Google Calendar. 250+ calls in its first three months.</p>
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
        <article className="experience"><h3>MSU Terrorism, Extremism and Cybercrime Lab</h3><p className="descriptor">Undergraduate Research Assistant, October 2026 to present, East Lansing, MI</p><p>Develop a forensic biometric matching application used by state and local law enforcement, extending a vector-embedding identification system across Windows and macOS builds. Build data collection and classification pipelines under IRB protocol, covering scheduled collection, structured extraction from unstructured sources, and model-assisted coding with human review.</p></article>
        <article className="experience"><h3>Stellantis</h3><p className="descriptor">AI / Software Development Intern, Summer 2026</p><p>Delivered internal AI tooling to three product development teams and the start-up business unit, supporting engineering work across the Jeep, Dodge, and SRT brands. Built retrieval-augmented generation systems in Databricks that made engineering documentation searchable, replacing manual search across roughly 16 TB of semi-sorted SharePoint and OneDrive content, and owned ingestion, chunking, embeddings, similarity search, and grounded generation. Presented the retrieval system to a company board including the CEO, and the work was handed to a permanent team to carry forward after the internship. An AI presentation formatting tool I shipped remains in production use by the team.</p></article>
        <article className="experience"><h3>Stone Call LLC</h3><p className="descriptor">Founder, 2025 to present, Northville, MI</p><p>Operate an LLC shipping AI products end to end, owning product, architecture, infrastructure, and go-to-market.</p></article>
      </Section>
    </main>
    <Footer />
  </div>;
}

