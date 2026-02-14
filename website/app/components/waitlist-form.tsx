"use client";

import { useRouter } from "next/navigation";
import { useForminitSubmit } from "../hooks/use-forminit-submit";

export function WaitlistForm() {
  const router = useRouter();
  const { status, error, handleSubmit } = useForminitSubmit(
    "zrxkron547b",
    (formData) => {
      const email = formData.get("fi-sender-email") as string;
      router.push(`/questionnaire?email=${encodeURIComponent(email)}`);
    },
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {status === "error" && <p>{error}</p>}
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
          className="w-full rounded-lg px-8 py-3 text-base font-semibold text-amber-800 border border-amber-600 bg-amber-100 hover:bg-amber-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer"
        >
          {status === "loading" ? "Joining" : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
}
