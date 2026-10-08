import type { ReactNode } from 'react';
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="section" aria-labelledby={title.toLowerCase().replaceAll(' ', '-')}><h2 className="section-label" id={title.toLowerCase().replaceAll(' ', '-')}>{title}</h2>{children}</section>;
}
export function SocialLinks({ resume = false }: { resume?: boolean }) {
  return <><a href="https://github.com/no1ar1">GitHub</a><a href="https://www.linkedin.com/in/nolanhuyck/">LinkedIn</a>{resume && <a href="/Nolan_Huyck_Resume.pdf">Resume (PDF)</a>}</>;
}
export function Footer() {
  return <footer className="small"><nav className="links" aria-label="Contact"><a href="mailto:nrhuyck@gmail.com">nrhuyck@gmail.com</a><a href="tel:+12489740245">(248) 974-0245</a><SocialLinks /></nav><p className="muted">Built in East Lansing.</p></footer>;
}
