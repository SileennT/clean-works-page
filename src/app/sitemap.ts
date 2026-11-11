import type { MetadataRoute } from "next";
import { articles, serviceAreaLocations, services } from "@/data/site";

const siteUrl = "https://cleanworks.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/uslugi",
    "/realizacje",
    "/blog",
    "/o-firmie",
    "/kontakt",
    ...services.map((service) => `/uslugi/${service.slug}`),
    ...articles.map((article) => `/blog/${article.slug}`),
    ...serviceAreaLocations.map((location) => `/obszar-dzialania/${location.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
