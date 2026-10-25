export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const businessPhone = {
  display: "884 045 079",
  href: "tel:+48884045079",
};

export const services: Service[] = [
  {
    title: "Malowanie dachów",
    description: "Odświeżenie koloru i estetyki dachu po odpowiednim przygotowaniu pokrycia.",
    icon: "⌂",
  },
  {
    title: "Mycie dachów",
    description: "Usuwanie zabrudzeń z dachówek i innych pokryć metodą dobraną do powierzchni.",
    icon: "✦",
  },
  {
    title: "Przygotowanie powierzchni",
    description: "Czyszczenie i przygotowanie dachu przed dalszymi pracami renowacyjnymi.",
    icon: "▤",
  },
  {
    title: "Czyszczenie elewacji",
    description: "Odświeżenie ścian zewnętrznych z uwzględnieniem materiału i stanu elewacji.",
    icon: "▦",
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
