import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { galleryItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Realizacje | CleanWorks",
  description: "Przykładowa galeria realizacji CleanWorks. Dodaj zaakceptowane zdjęcia projektów klienta.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="NASZE PRACE"
        title="Realizacje"
        description="Zobacz przykładowe miejsca na fotografie dachów przed i po wykonaniu prac."
      />
      <section className="section section-gallery">
        <div className="section-wrap">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                <div className="gallery-placeholder"><span>Dodaj zdjęcie przed / po</span></div>
                <div className="gallery-caption">
                  <div><h2>{item.title}</h2><p>{item.location}</p></div>
                  <span className="gallery-arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
