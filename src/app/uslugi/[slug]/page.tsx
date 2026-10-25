import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ServiceIcon } from "@/components/service-icon";
import { businessPhone, services } from "@/data/site";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | CleanWorks` : "Usługa | CleanWorks",
    description: service?.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main>
      <PageIntro eyebrow="USŁUGI CLEANWORKS" title={service.title} description={service.description} />
      <section className="section">
        <div className="section-wrap detail-grid">
          <article className="detail-copy">
            <p className="eyebrow">JAK WYGLĄDA WSPÓŁPRACA?</p>
            <h2>Zakres dopasujemy do Twojego dachu.</h2>
            <p>
              Każde pokrycie i każda realizacja są inne. Zaczynamy od poznania
              potrzeb, rodzaju powierzchni i oczekiwanego efektu. Następnie
              omawiamy możliwy zakres prac oraz wycenę.
            </p>
            <ul className="detail-list">
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <a className="button button-primary" href={businessPhone.href}>
              Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
            </a>
            <Link className="detail-back-link" href="/uslugi">← Zobacz wszystkie usługi</Link>
          </article>
          <aside className="detail-callout">
            <span className="service-icon"><ServiceIcon name={service.icon} /></span>
            <p className="eyebrow">BEZPŁATNA WYCENA</p>
            <h2>Zapytaj o usługę</h2>
            <p>Opowiedz nam, czego potrzebujesz. Ustalimy kolejne kroki i odpowiemy na pytania.</p>
            <Link className="button button-primary" href="/kontakt">Przejdź do kontaktu <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
