import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceCard } from "@/components/service-card";
import { businessPhone, faqs, galleryItems, services, trustPoints } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-wrap" id="start">
          <div className="hero-copy">
            <p className="eyebrow">CLEANWORKS · MALOWANIE I MYCIE DACHÓW</p>
            <h1>Malowanie dachów</h1>
            <p className="hero-slogan">Odśwież swój dach — zyskaj na lata!</p>
            <p className="hero-lede">
              Przywracamy dachom świeży wygląd. Zaczynamy od dokładnego
              czyszczenia i przygotowania powierzchni.
            </p>
            <ul className="hero-benefits">
              <li><span aria-hidden="true">✓</span> Profesjonalne malowanie dachów</li>
              <li><span aria-hidden="true">✦</span> Czyszczenie i przygotowanie powierzchni</li>
              <li><span aria-hidden="true">⌂</span> Estetyczny wygląd Twojego domu</li>
            </ul>
            <a className="hero-phone" href={businessPhone.href}>
              <span className="phone-icon" aria-hidden="true">☎</span>
              <span className="phone-copy">
                <span>Zadzwoń i zapytaj o wycenę</span>
                <strong>{businessPhone.display}</strong>
              </span>
            </a>
          </div>
          <div className="hero-art" role="img" aria-label="Porównanie dachu przed i po malowaniu">
            <div className="roof-sky" />
            <div className="roof-surface roof-surface-painted" />
            <div className="roof-comparison">
              <div className="comparison-side comparison-before"><span>PRZED</span></div>
              <div className="comparison-side comparison-after"><span>PO</span></div>
            </div>
            <p className="art-caption">Twój dach w dobrych rękach</p>
          </div>
          <div className="hero-proof" aria-label="Najważniejsze informacje">
            <span>01 / Dokładne przygotowanie</span>
            <span>02 / Dobór metody do pokrycia</span>
            <span>03 / Bezpośredni kontakt</span>
          </div>
        </section>

        <section className="section section-services" id="uslugi">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">JAK MOŻEMY POMÓC?</p>
                <h2>Usługi, które robią różnicę.</h2>
              </div>
              <p className="section-intro">
                Wybierz usługę lub opowiedz nam o swoim projekcie. Zakres dopasujemy
                do rodzaju i stanu powierzchni.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index + 1} />
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
              <h2>Dobry efekt zaczyna się od rozmowy.</h2>
              <p className="section-intro">
                Napisz lub zadzwoń. Opowiedz nam, czego potrzebujesz, a wrócimy
                z kolejnym krokiem.
              </p>
              <a className="button button-primary" href={businessPhone.href}>
                Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-details">
              <div><span>NAPISZ DO NAS</span><a href="mailto:kontakt@twojafirma.pl">kontakt@twojafirma.pl</a></div>
              <div><span>OBSZAR DZIAŁANIA</span><p>[Miasto / region]</p></div>
              <div><span>GODZINY KONTAKTU</span><p>[Dni i godziny do uzupełnienia]</p></div>
              <p className="contact-hint">Uzupełnij dane kontaktowe przed publikacją strony.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
