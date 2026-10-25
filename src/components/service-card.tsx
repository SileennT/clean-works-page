import type { Service } from "@/data/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className={`service-card service-card-${index}`}>
      <div className="service-icon" aria-hidden="true">{service.icon}</div>
      <span className="service-index">0{index}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href="#kontakt" aria-label={`Zapytaj o usługę: ${service.title}`}>
        Zapytaj o usługę <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
