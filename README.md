# CleanWorks — starter strony usługowej

Responsywny szablon landing page'a w Next.js i TypeScript, przygotowany jako punkt wyjścia dla lokalnej firmy usługowej. Układ czerpie z typowych stron firm wykonujących czyszczenie i renowację: oferta, proces, realizacje, FAQ, obszar działania i kontakt. To autorski przykład — nie kopiuje tekstów, zdjęć ani identyfikacji Artpel.

## Uruchamianie projektu

### Wymagania

- Node.js w wersji 20.9 lub nowszej
- npm (instaluje się razem z Node.js)
- Terminal, np. PowerShell w Windows lub terminal w VS Code

Sprawdź, czy Node.js i npm są dostępne:

```powershell
node --version
npm --version
```

### Pierwsze uruchomienie

1. Otwórz folder projektu w VS Code.
2. Wybierz **Terminal → New Terminal**.
3. Zainstaluj zależności (wykonaj przy pierwszym uruchomieniu lub po zmianie zależności):

```powershell
npm install
```

4. Uruchom stronę w trybie developerskim:

```powershell
npm run dev
```

5. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce. Po zapisaniu zmian strona odświeży się automatycznie.
6. Aby zatrzymać serwer, wróć do terminala i naciśnij **Ctrl+C**.

Zostaw terminal z uruchomionym serwerem otwarty podczas pracy nad stroną.

### Dostępne komendy

| Komenda | Do czego służy |
| --- | --- |
| `npm run dev` | Uruchamia lokalny serwer developerski z automatycznym odświeżaniem. |
| `npm run typecheck` | Sprawdza typy TypeScript bez budowania strony. |
| `npm run build` | Tworzy zoptymalizowaną wersję produkcyjną. |
| `npm run start` | Uruchamia lokalny podgląd wersji produkcyjnej; najpierw wykonaj `npm run build`. |

Przed publikacją uruchom sprawdzenie typów i zbuduj stronę:

```powershell
npm run typecheck
npm run build
```

Aby sprawdzić wersję produkcyjną lokalnie, po udanym buildzie uruchom:

```powershell
npm run start
```

Podgląd otwórz pod adresem [http://localhost:3000](http://localhost:3000). Zatrzymasz go skrótem **Ctrl+C** w terminalu.

Jeżeli port 3000 jest już zajęty, zatrzymaj poprzedni serwer developerski skrótem **Ctrl+C** albo użyj adresu portu, który Next.js pokaże w terminalu.

## Struktura

```text
src/
  app/
    globals.css       # style, responsywność i kolory
    layout.tsx        # wspólny nagłówek, stopka i metadane
    page.tsx          # strona główna
    uslugi/           # lista usług i podstrony poszczególnych usług
    realizacje/       # galeria prac
    blog/             # poradnik i podstrony artykułów
    o-firmie/         # informacje o firmie
    kontakt/          # dane kontaktowe i formularz
    api/contact/      # serwerowa wysyłka formularza przez Resend
  components/
    site-header.tsx   # nagłówek i nawigacja
    site-footer.tsx   # stopka
    service-card.tsx  # powtarzalna karta usługi
    page-intro.tsx    # wspólny nagłówek podstron
    contact-form.tsx  # formularz zapytań
  data/
    site.ts           # przykładowe usługi, FAQ i treści
```

## Podstrony

- `/` — strona główna z formularzem wyceny w sekcji otwierającej.
- `/uslugi` — lista dostępnych usług.
- `/uslugi/malowanie-dachow`, `/uslugi/mycie-dachow`, `/uslugi/czyszczenie-elewacji`, `/uslugi/malowanie-elewacji` — opisy usług.
- `/realizacje` — galeria przykładowych realizacji.
- `/blog` oraz `/blog/[slug]` — poradnik i artykuły.
- `/o-firmie` — informacje o firmie.
- `/kontakt` — dane kontaktowe i formularz.

## Co uzupełnić dla klienta

- Zmień nazwę CleanWorks, opisy, usługi i dane w `src/data/site.ts` oraz komponentach.
- Numer telefonu z przesłanej inspiracji jest ustawiony w `src/data/site.ts`; potwierdź go z klientem. Uzupełnij także e-mail, obszar działania, godziny i dane firmy.
- Zastąp ilustracje i pola „Dodaj zdjęcie” prawdziwymi, zaakceptowanymi zdjęciami klienta. Najlepiej przygotować własne fotografie „przed i po”.
- Zaktualizuj tytuł i opis SEO w `src/app/layout.tsx`; dodaj docelową politykę prywatności przed publikacją.
- Zweryfikuj wszystkie obietnice marketingowe, dostępność usług i opinie — szablon nie zakłada niepotwierdzonych gwarancji ani referencji.
- Formularz wysyła zgłoszenia przez Resend na `cleanworks.goraj@gmail.com`. Skonfiguruj Resend przed użyciem i publikacją, zgodnie z instrukcją poniżej.

## Przykładowe elementy strony

Hero z wezwaniem do kontaktu, kafle usług, sekcja o firmie, czteroetapowy proces, galeria realizacji, rozwijane FAQ, obszar działania, formularz kontaktowy i wyraźny kontakt telefoniczny.

## Konfiguracja formularza kontaktowego

Wysyłka odbywa się przez API usługi [Resend](https://resend.com/), bez konfiguracji SMTP. Potrzebujesz konta Resend i klucza API. Aby wysyłać wiadomości na `cleanworks.goraj@gmail.com`, zweryfikuj własną domenę nadawcy w Resend i użyj adresu z tej domeny jako `RESEND_FROM`. Sam adres odbiorcy może pozostać adresem Gmail.

1. Skopiuj przykładowy plik ustawień:

```powershell
Copy-Item .env.example .env.local
```

2. W panelu Resend utwórz klucz API i wstaw go jako `RESEND_API_KEY` w `.env.local`.
3. Po zweryfikowaniu domeny ustaw `RESEND_FROM`, np. `CleanWorks <formularz@twojadomena.pl>`. Zastąp `twojadomena.pl` własną domeną zweryfikowaną w Resend.
4. `CONTACT_TO` określa adres, na który mają przychodzić wiadomości. Domyślnie jest to `cleanworks.goraj@gmail.com`.
5. Uruchom ponownie serwer developerski po zmianie `.env.local`:

```powershell
npm run dev
```

`.env.local` zawiera sekret i nie wolno go dodawać do repozytorium. W hostingu produkcyjnym ustaw `RESEND_API_KEY`, `RESEND_FROM` i `CONTACT_TO` w panelu zmiennych środowiskowych hostingu, a nie w kodzie. Bez prawidłowych ustawień formularz pokaże informację o braku konfiguracji, a wysyłka nie zostanie potwierdzona.
