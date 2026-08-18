import { useState } from "react";
import axios from "axios";

const initialValues = {
  firstName: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export default function BookDemoForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
      if (!apiUrl) {
        throw new Error("Demo requests are not configured yet. Please email hello@growdex.ai.");
      }

      await axios.post(`${apiUrl}/contact/book-demo`, values, {
        headers: { "Content-Type": "application/json" },
      });
      setSubmittedEmail(values.email);
      setValues(initialValues);
      setStatus("sent");
    } catch (failure) {
      setStatus("idle");
      setError(
        "We could not send your request. Please try again or email hello@growdex.ai.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-lime-200 bg-lime-50 px-5 py-6 text-left text-lime-950">
        <p className="text-lg font-semibold">Your demo request is on its way.</p>
        <p className="mt-2 text-sm leading-6 text-lime-900">
          We will reply to {submittedEmail} shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3 text-left sm:grid-cols-2">
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-300">First name</span>
        <input name="firstName" value={values.firstName} onChange={updateField} required autoComplete="given-name" className="w-full rounded-xl border border-white/20 bg-white px-3.5 py-3 text-sm text-zinc-950 outline-none transition focus:border-yellow-200 focus:ring-2 focus:ring-yellow-200/40" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-300">Work email</span>
        <input name="email" type="email" value={values.email} onChange={updateField} required autoComplete="email" className="w-full rounded-xl border border-white/20 bg-white px-3.5 py-3 text-sm text-zinc-950 outline-none transition focus:border-yellow-200 focus:ring-2 focus:ring-yellow-200/40" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-zinc-300">Company <span className="text-zinc-500">(optional)</span></span>
        <input name="company" value={values.company} onChange={updateField} autoComplete="organization" className="w-full rounded-xl border border-white/20 bg-white px-3.5 py-3 text-sm text-zinc-950 outline-none transition focus:border-yellow-200 focus:ring-2 focus:ring-yellow-200/40" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-zinc-300">What would you like to achieve? <span className="text-zinc-500">(optional)</span></span>
        <textarea name="message" value={values.message} onChange={updateField} rows="3" className="w-full resize-y rounded-xl border border-white/20 bg-white px-3.5 py-3 text-sm text-zinc-950 outline-none transition focus:border-yellow-200 focus:ring-2 focus:ring-yellow-200/40" />
      </label>
      <input name="website" value={values.website} onChange={updateField} tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
      {error && <p className="sm:col-span-2 text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="sm:col-span-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow-200 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70">
        {status === "sending" ? "Sending request…" : "Book a demo"}
      </button>
    </form>
  );
}
