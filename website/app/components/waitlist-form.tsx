"use client";

import { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit({ proxyUrl: "/api/forminit" });

export function WaitlistForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { data, error } = await forminit.submit("zrxkron547b", formData);

    if (error) {
      setStatus("error");
      setError(error.message);
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {status === "error" && <p>{error}</p>}
      {status === "success" && <p>You've been added you to our waitlist!</p>}
      <div className="flex gap-1">
        <input
          required
          type="email"
          name="fi-sender-email"
          placeholder="your.name@email.com"
          className="text-lg border border-gray-300 rounded-lg flex-1 px-4 py-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 border rounded-lg text-amber-800 border-amber-600 bg-amber-100"
        >
          {status === "loading" ? "Joining" : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
}
