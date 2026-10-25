import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <Link className="brand brand-footer" href="/">
          <svg className="brand-mark" viewBox="0 0 48 36" aria-hidden="true">
            <path d="M2 25 14 13l8 7L34 7l12 18h-9l-5-8-10 9-8-7-7 7H2Z" />
            <path d="M8 29h32M15 25v-5m19 5v-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
          <span>CLEAN <span>WORKS</span></span>
        </Link>
        <p>Malowanie i mycie dachów — CleanWorks.</p>
        <Link href="/" className="back-top">Strona główna ↑</Link>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} CleanWorks</span>
        <span><Link href="/kontakt">Kontakt</Link> · [Polityka prywatności]</span>
      </div>
    </footer>
  );
}
