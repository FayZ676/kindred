"use client";

import { countries, getEmojiFlag, type TCountryCode } from "countries-list";
import { useForminitSubmit } from "../hooks/use-forminit-submit";

const AGE_RANGES = ["18–24", "25–34", "35–44", "45–54", "55+"];
const GENDERS = ["Man", "Woman", "Other", "Prefer not to say"];
const LOCATIONS = Object.entries(countries)
  .map(([code, c]) => ({
    label: `${getEmojiFlag(code as TCountryCode)} ${c.name}`,
    value: c.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));
const HOW_MET = [
  "Through Family & Friends",
  "Bahá'í Activies",
  "School",
  "Work",
  "Dating apps & websites",
  "Social media",
  "Other",
];
const LIKELIHOOD = [
  "Very likely",
  "Somewhat likely",
  "Neutral",
  "Somewhat unlikely",
  "Very unlikely",
];

export function QuestionnaireForm({ email }: { email?: string }) {
  const { status, error, handleSubmit } = useForminitSubmit("40ve0qvn0g2");

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-green-700">
          Thank you for sharing your thoughts! 💛
        </p>
        <a
          href="/"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 underline"
        >
          ← Back to home
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-6"
    >
      {status === "error" && <p className="text-red-600">{error}</p>}
      {email && <input type="hidden" name="fi-sender-email" value={email} />}

      {/* Demographics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="age" className="block text-lg font-bold mb-1">
            Age range
          </label>
          <select
            id="age"
            name="fi-select-age"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
          >
            <option value="">Select…</option>
            {AGE_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="block text-lg font-bold mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="fi-select-gender"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
          >
            <option value="">Select…</option>
            {GENDERS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* How they've met partners */}
      <div>
        <label htmlFor="howMet" className="block text-lg font-bold mb-1">
          How have you typically met people you're interested in?
        </label>
        <select
          id="howMet"
          name="fi-select-how-met"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
        >
          <option value="">Select…</option>
          {HOW_MET.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Freeform feedback */}
      <div>
        <label htmlFor="lookingFor" className="block text-lg font-bold mb-2">
          What do you want to see in a dating app or website? No wrong answers.
        </label>
        <textarea
          id="lookingFor"
          name="fi-text-feedback"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-y"
          rows={6}
          placeholder={[
            "e.g. I wish there could be more of a focus on genuine conversation instead of just swiping...",
          ].join("\n\n")}
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
