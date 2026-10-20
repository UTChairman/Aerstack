/**
 * Formspree endpoint. Override per-environment with NEXT_PUBLIC_FORMSPREE_ENDPOINT.
 * Framer handled form submission internally, so this replaces that backend.
 */
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mvkorqge";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** POSTs a form to Formspree as JSON and returns whether it succeeded. */
export async function submitToFormspree(form: HTMLFormElement): Promise<void> {
  const data = Object.fromEntries(new FormData(form).entries());

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // Formspree returns { errors: [{ message }] } on validation failure
    let message = "Something went wrong. Please try again.";
    try {
      const body = await res.json();
      if (Array.isArray(body?.errors) && body.errors[0]?.message) message = body.errors[0].message;
    } catch {
      /* keep the default message */
    }
    throw new Error(message);
  }
}
