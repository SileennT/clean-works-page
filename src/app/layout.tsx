import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanWorks | Malowanie i mycie dachów",
  description:
    "Malowanie i mycie dachów oraz przygotowanie powierzchni. Skontaktuj się z CleanWorks, aby zapytać o wycenę.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
