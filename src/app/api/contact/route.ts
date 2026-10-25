import { Resend } from "resend";

export const runtime = "nodejs";

type ContactSubmission = {
  name: string;
  phone: string;
  message: string;
  consent: boolean;
};

function isContactSubmission(value: unknown): value is ContactSubmission {
  if (typeof value !== "object" || value === null) return false;

  const submission = value as Record<string, unknown>;
  return (
    typeof submission.name === "string" &&
    typeof submission.phone === "string" &&
    typeof submission.message === "string" &&
    typeof submission.consent === "boolean"
  );
}

function invalidSubmission(submission: ContactSubmission) {
  return (
    submission.name.trim().length < 2 ||
    submission.name.length > 100 ||
    !/^[+\d\s().-]{6,24}$/.test(submission.phone.trim()) ||
    submission.message.trim().length < 10 ||
    submission.message.length > 3000 ||
    !submission.consent
  );
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Nieprawidłowy format danych." }, { status: 415 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Nie udało się odczytać formularza." }, { status: 400 });
  }

  if (!isContactSubmission(payload) || invalidSubmission(payload)) {
    return Response.json(
      { error: "Sprawdź wymagane pola i poprawność wpisanych danych." },
      { status: 400 },
    );
  }

  const { RESEND_API_KEY, RESEND_FROM, CONTACT_TO } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM || !CONTACT_TO) {
    console.error("Contact form Resend settings are missing.");
    return Response.json(
      { error: "Formularz nie jest jeszcze skonfigurowany. Skontaktuj się z nami telefonicznie." },
      { status: 503 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_TO,
      subject: "Nowe zapytanie ze strony CleanWorks",
      text: [
        "Nowe zapytanie z formularza na stronie CleanWorks",
        "",
        `Imię i nazwisko: ${payload.name.trim()}`,
        `Telefon: ${payload.phone.trim()}`,
        "",
        "Wiadomość:",
        payload.message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the contact form email.", error);
      return Response.json(
        { error: "Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie później lub zadzwoń." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Resend request failed while sending contact form email.", error);
    return Response.json(
      { error: "Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie później lub zadzwoń." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
