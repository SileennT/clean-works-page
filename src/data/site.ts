export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  details: string[];
};

export type ServiceIconName =
  | "paint-roof"
  | "wash-roof"
  | "wash-facade"
  | "paint-facade";

export const businessPhone = {
  display: "884 045 079",
  href: "tel:+48884045079",
};

export const services: Service[] = [
  {
    slug: "malowanie-dachow",
    title: "Malowanie dachów",
    description: "Odświeżenie koloru i estetyki dachu po odpowiednim przygotowaniu pokrycia.",
    icon: "paint-roof",
    details: [
      "Ocena stanu i rodzaju pokrycia przed rozpoczęciem prac.",
      "Dokładne oczyszczenie dachu oraz przygotowanie podłoża.",
      "Dobór zakresu prac i sposobu odświeżenia do konkretnego dachu.",
    ],
  },
  {
    slug: "mycie-dachow",
    title: "Mycie dachów",
    description: "Usuwanie zabrudzeń z dachówek i innych pokryć metodą dobraną do powierzchni.",
    icon: "wash-roof",
    details: [
      "Oględziny pokrycia i dopasowanie metody czyszczenia.",
      "Usuwanie typowych zabrudzeń, osadów i nalotów.",
      "Omówienie dalszej pielęgnacji dachu po wykonanej usłudze.",
    ],
  },
  {
    slug: "czyszczenie-elewacji",
    title: "Czyszczenie elewacji",
    description: "Usuwanie zabrudzeń i nalotów ze ścian zewnętrznych metodą dopasowaną do elewacji.",
    icon: "wash-facade",
    details: [
      "Rozpoznanie rodzaju elewacji i jej stanu.",
      "Dobór odpowiedniej metody czyszczenia do powierzchni.",
      "Ustalenie zakresu prac i wyceny przed realizacją.",
    ],
  },
  {
    slug: "malowanie-elewacji",
    title: "Malowanie elewacji",
    description: "Odświeżenie wyglądu elewacji i dobór zakresu malowania do rodzaju podłoża.",
    icon: "paint-facade",
    details: [
      "Ocena rodzaju i stanu powierzchni przed rozpoczęciem prac.",
      "Ustalenie przygotowania podłoża i zakresu malowania.",
      "Dobór rozwiązania oraz wycena dopasowana do budynku.",
    ],
  },
];

export const articles = [
  {
    slug: "kiedy-warto-odswiezyc-dach",
    title: "Kiedy warto odświeżyć dach?",
    excerpt: "Oznaki zużycia, przebarwienia i inne sygnały, które warto sprawdzić przed planowaniem prac.",
    date: "Poradnik",
    paragraphs: [
      "Dach jest stale narażony na działanie pogody, dlatego z czasem może zmienić kolor i pokryć się zabrudzeniami. Regularne oględziny pomagają zauważyć zmiany, zanim zaplanujesz kolejne prace.",
      "Zwróć uwagę na przebarwienia, naloty i stan samej powierzchni. Przed wyborem usługi warto ocenić rodzaj pokrycia oraz jego kondycję, aby dobrać odpowiedni zakres działań.",
      "Jeśli nie masz pewności, od czego zacząć, prześlij opis i zdjęcia dachu. Na tej podstawie ustalimy, jakie informacje będą potrzebne do przygotowania wyceny.",
    ],
  },
  {
    slug: "jak-przygotowac-dach-do-malowania",
    title: "Jak przygotowuje się dach do malowania?",
    excerpt: "Dlaczego ocena i oczyszczenie powierzchni są ważne przed renowacją pokrycia.",
    date: "Poradnik",
    paragraphs: [
      "Przed malowaniem należy ocenić rodzaj pokrycia i jego stan. Dokładne oczyszczenie dachu jest ważnym etapem planowania, a sposób pracy powinien uwzględniać konkretne podłoże.",
      "Zakres przygotowania może obejmować czyszczenie oraz sprawdzenie powierzchni. Szczegóły ustala się po zapoznaniu z dachem, jego dostępnością i oczekiwanym efektem.",
      "Każdy dach jest inny. Przed rozpoczęciem prac warto uzgodnić z wykonawcą zakres usługi, wycenę i możliwy termin.",
    ],
  },
  {
    slug: "o-co-zapytac-przed-wycena",
    title: "O co zapytać przed wyceną usługi?",
    excerpt: "Krótka lista informacji, które ułatwią rozmowę o dachu i planowanych pracach.",
    date: "Wskazówki",
    paragraphs: [
      "Przygotuj przybliżony rozmiar dachu, informację o rodzaju pokrycia oraz miejscowość, w której znajduje się budynek. Zdjęcia mogą pomóc w pierwszej rozmowie.",
      "Opowiedz, jaki efekt chcesz uzyskać i czy planujesz samo czyszczenie, czy również malowanie. Warto też wspomnieć o widocznych uszkodzeniach lub utrudnionym dostępie.",
      "Na podstawie tych informacji wykonawca może określić kolejne kroki i ustalić, czy potrzebne będą oględziny na miejscu.",
    ],
  },
];

export const trustPoints = [
  {
    title: "Najpierw rozmowa. ",
    description: "Ustalamy potrzeby i zakres zanim zaproponujemy rozwiązanie.",
  },
  {
    title: "Metoda dopasowana do powierzchni. ",
    description: "Każdą realizację planujemy z uwzględnieniem jej specyfiki.",
  },
  {
    title: "Jasne zasady współpracy. ",
    description: "Omawiamy wycenę i kolejne kroki przed rozpoczęciem prac.",
  },
];

export const galleryItems = [
  { title: "Mycie dachu", location: "[Miejscowość] · [rok]" },
  { title: "Odświeżenie elewacji", location: "[Miejscowość] · [rok]" },
  { title: "Czyszczenie podjazdu", location: "[Miejscowość] · [rok]" },
];

export const faqs = [
  {
    question: "Od czego zależy wycena usługi?",
    answer:
      "Koszt zależy między innymi od rodzaju i wielkości powierzchni, jej stanu oraz zakresu prac. Przekaż nam podstawowe informacje, aby ustalić dalsze kroki.",
  },
  {
    question: "Czy przed wyceną potrzebne są oględziny?",
    answer:
      "To zależy od konkretnego zlecenia. Po rozmowie ustalimy, czy wystarczą zdjęcia i opis, czy potrzebne będzie obejrzenie powierzchni na miejscu.",
  },
  {
    question: "Na jakim obszarze realizujecie usługi?",
    answer:
      "Wpisz tutaj obsługiwane miasta i regiony. Jeśli nie masz pewności, czy dojeżdżamy do Twojej miejscowości, skontaktuj się z nami.",
  },
];
