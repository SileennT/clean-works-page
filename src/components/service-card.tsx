import type { Service } from "@/data/site";
import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-icon"><ServiceIcon name={service.icon} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/uslugi/${service.slug}`} aria-label={`Poznaj usługę: ${service.title}`}>
        Poznaj usługę <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
