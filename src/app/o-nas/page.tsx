import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { trustPoints } from "@/data/site";

export const metadata: Metadata = {
  title: "O nas | CleanWorks",
  description: "Poznaj podejście CleanWorks do czyszczenia i odświeżania dachów.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="POZNAJ CLEANWORKS"
        title="Dobra współpraca zaczyna się od rozmowy."
        description="Przedstawiamy własne podejście do planowania usług i współpracy z klientami."
      />
      <section className="section">
        <div className="section-wrap about-page-grid">
          <div className="about-visual">
            <div className="about-stamp"><span>CLEANWORKS</span><strong>Dachy<br />pod opieką</strong></div>
            <div className="about-lines" aria-hidden="true" />
            <p className="visual-caption">Miejsce na zdjęcie zespołu lub sprzętu</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">NASZE PODEJŚCIE</p>
            <h2>Każdy dach wymaga indywidualnej oceny.</h2>
            <p>
              Zanim zaproponujemy zakres prac, chcemy zrozumieć potrzeby klienta,
              rodzaj powierzchni i oczekiwany efekt. Omawiamy plan i wycenę przed
              rozpoczęciem realizacji.
            </p>
            <ul className="check-list">
              {trustPoints.map((point) => (
                <li key={point.title}>
                  <span className="check-mark" aria-hidden="true">✓</span>
                  <span><strong>{point.title}</strong>{point.description}</span>
                </li>
              ))}
            </ul>
            <Link className="button button-primary" href="/kontakt">Skontaktuj się z nami <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
