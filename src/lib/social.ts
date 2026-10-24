/**
 * The company's social profiles, in one place.
 *
 * Every URL here was checked and resolves to the Aerstack account:
 *   Facebook  "Aerstack | Facebook", canonical /people/Aerstack/<id>/
 *   X         "Aerstack (@aerstack) / X"
 *   LinkedIn  "AERSTACK | LinkedIn", canonical /company/aerstack
 *
 * The footer, the newsletter card and the Organization schema all read from
 * this list, so a profile cannot be live in one place and a dead link in
 * another. Only add an entry once its URL has been confirmed: a sameAs that
 * points nowhere is a worse signal than no sameAs at all.
 */
export type Social = { key: string; label: string; href: string; path: string };

export const SOCIALS: Social[] = [
  {
    key: "facebook",
    label: "Facebook",
    // profile.php?id=… redirects here; linking the target avoids the hop
    href: "https://www.facebook.com/people/Aerstack/61595635359290/",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    key: "x",
    label: "X",
    href: "https://x.com/aerstack",
    path: "M23 4.9c-.8.4-1.7.7-2.6.8 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.6a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.7-1.4 2.3-2.3z",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aerstack/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4 0 4.74 2.5 4.74 5.8V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.44-2.2 2.9V21H9z",
  },
];

/** Bare profile URLs for schema.org sameAs. */
export const SOCIAL_URLS = SOCIALS.map((s) => s.href);
