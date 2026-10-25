import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { businessPhone, faqs, galleryItems, services, trustPoints } from "@/data/site";

export default function HomePage() {
  return (
    <main>
        <section className="hero section-wrap" id="start">
          <div className="hero-copy">
            <p className="eyebrow">CLEANWORKS · MALOWANIE I MYCIE DACHÓW</p>
            <h1>Malowanie dachów</h1>
            <p className="hero-slogan">Odśwież swój dach — zyskaj na lata!</p>
            <p className="hero-lede">
              Przywracamy dachom świeży wygląd. Zaczynamy od dokładnego czyszczenia dachu.
            </p>
            <ul className="hero-benefits">
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 5h12a3 3 0 0 1 3 3v1H9a3 3 0 0 1-3-3V5Zm12 4v3a3 3 0 0 1-3 3h-1v5m-2 0h4" /></svg>
                </span>
                Profesjonalne malowanie dachów
              </li>
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M8 4c0 2-3 5-3 8a3 3 0 0 0 6 0c0-3-3-6-3-8Zm9 2c0 1.5-2 3.5-2 5.5a2 2 0 0 0 4 0C19 9.5 17 7.5 17 6ZM5 19c3 1.5 11 1.5 14 0" /></svg>
                </span>
                Dokładne czyszczenie dachów
              </li>
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m2 11 10-8 10 8M5 10v10h14V10M9 20v-6h6v6M9 8h.01M15 8h.01" /></svg>
                </span>
                Estetyczny wygląd Twojego domu
              </li>
            </ul>
            <a className="hero-phone" href={businessPhone.href}>
              <span className="phone-icon" aria-hidden="true">☎</span>
              <span className="phone-copy">
                <span>Zadzwoń i zapytaj o wycenę</span>
                <strong>{businessPhone.display}</strong>
              </span>
            </a>
          </div>
          <div className="hero-form-panel">
            <div className="hero-form-heading">
              <h2>Bezpłatna wycena</h2>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="section section-services" id="uslugi">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">JAK MOŻEMY POMÓC?</p>
                <h2>Usługi, które robią różnicę.</h2>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-about" id="o-nas">
          <div className="section-wrap about-grid">
            <div className="about-visual">
              <div className="about-stamp">
                <span>EFEKT</span>
                <strong>zaczyna się<br />od dobrego planu</strong>
              </div>
              <div className="about-lines" aria-hidden="true" />
              <p className="visual-caption">Wstaw zdjęcie zespołu lub sprzętu</p>
            </div>
            <div className="about-copy">
              <p className="eyebrow">POZNAJ CLEANWORKS</p>
              <h2>Dbamy o powierzchnie. I o dobrą współpracę.</h2>
              <p>
                Każdy budynek i każda powierzchnia są inne. Dlatego przed rozpoczęciem
                prac poznajemy potrzeby klienta, omawiamy zakres i dobieramy
                odpowiednie rozwiązanie.
              </p>
              <ul className="check-list">
                {trustPoints.map((point) => (
                  <li key={point.title}>
                    <span className="check-mark" aria-hidden="true">✓</span>
                    <span><strong>{point.title}</strong>{point.description}</span>
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#kontakt">
                Porozmawiajmy o Twoim projekcie <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section section-process">
          <div className="section-wrap">
            <div className="section-heading section-heading-centered">
              <div>
                <p className="eyebrow">PROSTY PROCES</p>
                <h2>Od pierwszej rozmowy do gotowego efektu.</h2>
              </div>
            </div>
            <div className="process-grid">
              {[
                ["01", "Daj nam znać", "Zadzwoń lub napisz, czego potrzebujesz."],
                ["02", "Ustalamy szczegóły", "Poznajemy powierzchnię i zakres prac."],
                ["03", "Otrzymujesz wycenę", "Przedstawiamy plan i koszt realizacji."],
                ["04", "Działamy", "Po akceptacji ustalamy dogodny termin."],
              ].map(([number, title, description]) => (
                <article className="process-step" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-gallery" id="realizacje">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">NASZE REALIZACJE</p>
                <h2>Najlepiej widać to na przykładach.</h2>
              </div>
              <p className="section-intro">
                Dodaj zdjęcia przed i po, aby pokazać prawdziwy zakres oraz efekty
                pracy Twojego zespołu.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                  <div className="gallery-placeholder">
                    <span>Dodaj zdjęcie</span>
                  </div>
                  <div className="gallery-caption">
                    <div><h3>{item.title}</h3><p>{item.location}</p></div>
                    <span className="gallery-arrow" aria-hidden="true">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="section-wrap faq-grid">
            <div>
              <p className="eyebrow">DOBRZE WIEDZIEĆ</p>
              <h2>Masz pytania?</h2>
              <p className="section-intro">
                Zebraliśmy kilka odpowiedzi na początek. Jeśli nie ma tu tego,
                czego szukasz, skontaktuj się z nami.
              </p>
              <a className="text-link" href="#kontakt">Zadaj własne pytanie <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-area" id="obszar">
          <div className="section-wrap area-card">
            <div>
              <p className="eyebrow">JESTEŚMY BLISKO</p>
              <h2>Sprawdź, czy działamy w Twojej okolicy.</h2>
              <p>Obsługiwany obszar: [miasto, region i pobliskie miejscowości].</p>
            </div>
            <a className="button button-light" href="#kontakt">
              Zapytaj o dojazd <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section section-contact" id="kontakt">
          <div className="section-wrap contact-grid">
            <div>
              <p className="eyebrow">POROZMAWIAJMY</p>
              <h2>Opowiedz nam o swoim dachu.</h2>
              <p className="section-intro">
                Zadzwoń lub napisz — chętnie odpowiemy na pytania dotyczące
                malowania i mycia dachu.
              </p>
              <a className="button button-primary" href={businessPhone.href}>
                Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-details contact-info">
              <div><span>ADRES E-MAIL</span><a href="mailto:cleanworks.goraj@gmail.com">cleanworks.goraj@gmail.com</a></div>
              <div><span>OBSZAR DZIAŁANIA</span><p>[Miasto / region]</p></div>
            </div>
          </div>
        </section>
    </main>
  );
}
