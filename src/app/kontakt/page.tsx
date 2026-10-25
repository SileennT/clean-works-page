import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { businessPhone } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt | CleanWorks",
  description: "Skontaktuj się z CleanWorks w sprawie mycia lub malowania dachu.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="POROZMAWIAJMY"
        title="Zapytaj o wycenę"
        description="Zadzwoń lub wyślij wiadomość. Odezwiemy się, aby ustalić szczegóły."
      />
      <section className="section">
        <div className="section-wrap contact-grid">
          <div>
            <p className="eyebrow">DANE KONTAKTOWE</p>
            <h2>Jesteśmy do Twojej dyspozycji.</h2>
            <p className="section-intro">Opowiedz nam o dachu i zakresie prac, który Cię interesuje.</p>
            <a className="button button-primary" href={businessPhone.href}>
              Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-details contact-info">
              <div><span>ADRES E-MAIL</span><a href="mailto:cleanworks.goraj@gmail.com">cleanworks.goraj@gmail.com</a></div>
              <div><span>OBSZAR DZIAŁANIA</span><p>[Miasto / region]</p></div>
            </div>
          </div>
          <div className="hero-form-panel">
            <div className="hero-form-heading">
              <span className="form-badge">BEZPŁATNA WYCENA</span>
              <h2>Wyślij zapytanie</h2>
              <p>Uzupełnij dane, a skontaktujemy się z Tobą.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
