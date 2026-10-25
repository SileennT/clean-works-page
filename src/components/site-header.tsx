import { businessPhone } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#start" aria-label="CleanWorks — strona główna">
          <svg className="brand-mark" viewBox="0 0 48 36" aria-hidden="true">
            <path d="M2 25 14 13l8 7L34 7l12 18h-9l-5-8-10 9-8-7-7 7H2Z" />
            <path d="M8 29h32M15 25v-5m19 5v-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
          <span>CLEAN <span>WORKS</span></span>
        </a>
        <nav className="main-nav" aria-label="Nawigacja główna">
          <a href="#uslugi">Usługi</a>
          <a href="#o-nas">O nas</a>
          <a href="#realizacje">Realizacje</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-contact" href={businessPhone.href}>
          Zadzwoń <span>{businessPhone.display}</span>
        </a>
      </div>
    </header>
  );
}
