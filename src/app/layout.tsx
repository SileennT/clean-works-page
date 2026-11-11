import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanWorks | Malowanie i mycie dachów",
  description:
    "CleanWorks oferuje mycie i malowanie dachów oraz czyszczenie i malowanie elewacji. Skontaktuj się z nami, aby zapytać o bezpłatną wycenę.",
  metadataBase: new URL("https://cleanworks.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CleanWorks | Malowanie i mycie dachów",
    description:
      "CleanWorks oferuje mycie i malowanie dachów oraz czyszczenie i malowanie elewacji. Skontaktuj się z nami, aby zapytać o bezpłatną wycenę.",
    siteName: "CleanWorks",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
