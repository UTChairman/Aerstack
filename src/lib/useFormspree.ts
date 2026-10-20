"use client";

import { useState, type FormEvent } from "react";
import { submitToFormspree, type SubmitStatus } from "@/lib/forms";

/** Shared submit handling: status, error message, and reset-on-success. */
export function useFormspree() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");
    try {
      await submitToFormspree(form);
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return { status, error, onSubmit };
}
