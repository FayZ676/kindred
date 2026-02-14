"use client";

import { useForminitSubmit } from "../hooks/use-forminit-submit";

export function QuestionnaireForm({ email }: { email?: string }) {
  const { status, error, handleSubmit } = useForminitSubmit("40ve0qvn0g2");

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-green-700">
          Thank you for sharing your thoughts! 💛
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-6"
    >
      {status === "error" && <p className="text-red-600 text-sm">{error}</p>}
      {email && <input type="hidden" name="fi-sender-email" value={email} />}
      <div>
        <label htmlFor="lookingFor" className="block text-lg font-bold mb-2">
          What's important to you in a dating app? No wrong answers.
        </label>
        <textarea
          id="lookingFor"
          name="fi-text-feedback"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-y"
          rows={6}
          placeholder="e.g. I wish there could be more of a focus on genuine conversation instead of just swiping..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg px-8 py-3 text-base font-semibold text-amber-800 border border-amber-600 bg-amber-100 hover:bg-amber-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
