"use client";

import { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit({ proxyUrl: "/api/forminit" });

export type FormStatus = "idle" | "loading" | "success" | "error";

export function useForminitSubmit(
  formId: string,
  onSuccess?: (formData: FormData) => void,
) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { error } = await forminit.submit(formId, formData);
    if (error) {
      setStatus("error");
      setError(error.message);
      return;
    }
    setStatus("success");
    form.reset();
    onSuccess?.(formData);
  }
  return { status, error, handleSubmit };
}
