import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { articles } from "@/data/site";

export const metadata: Metadata = {
  title: "Poradnik | CleanWorks",
  description: "Wskazówki dotyczące pielęgnacji, czyszczenia i przygotowania dachów.",
};

export default function BlogPage() {
  return (
    <main>
      <PageIntro
        eyebrow="WIEDZA I WSKAZÓWKI"
        title="Poradnik"
        description="Praktyczne informacje, które pomogą przygotować się do prac przy dachu."
      />
      <section className="section section-gallery">
        <div className="section-wrap article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.slug}>
              <span className={`article-art article-art-${index + 1}`} aria-hidden="true" />
              <div className="article-card-copy">
                <span className="article-category">{article.date}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <Link className="text-link" href={`/blog/${article.slug}`}>
                  Czytaj artykuł <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
