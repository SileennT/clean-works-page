"use client";

import { useState, type FormEvent } from "react";

type FormStatus = {
  kind: "success" | "error";
  message: string;
} | null;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          consent: formData.get("consent") === "on",
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: result.error ?? "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        });
        return;
      }

      form.reset();
      setStatus({ kind: "success", message: "Dziękujemy! Wiadomość została wysłana." });
    } catch {
      setStatus({
        kind: "error",
        message: "Nie udało się połączyć z serwerem. Spróbuj ponownie za chwilę.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <label className="form-field">
          <span className="visually-hidden">Imię i nazwisko *</span>
          <input
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Imię i nazwisko *"
            required
          />
        </label>
        <label className="form-field">
          <span className="visually-hidden">Telefon *</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={24}
            placeholder="Telefon *"
            required
          />
        </label>
        <label className="form-field form-field-full">
          <span className="visually-hidden">Jak możemy Ci pomóc? *</span>
          <textarea
            name="message"
            rows={4}
            maxLength={3000}
            placeholder="Jak możemy Ci pomóc? *"
            required
          />
        </label>
      </div>
      <label className="consent-field">
        <input name="consent" type="checkbox" required />
        <span>
          Wyrażam zgodę na kontakt w sprawie mojego zapytania. <span aria-hidden="true">*</span>
        </span>
      </label>
      <button className="button button-primary form-submit" type="submit" disabled={isSending}>
        {isSending ? "Wysyłanie..." : "Wyślij"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-required-note">* Pola wymagane</p>
      <p className="form-status" aria-live="polite" data-kind={status?.kind}>
        {status?.message}
      </p>
    </form>
  );
}
