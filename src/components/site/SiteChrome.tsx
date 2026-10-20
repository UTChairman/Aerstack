"use client";

import { usePathname } from "next/navigation";

/**
 * Framer publishes /licensed-assets as a standalone page — it carries no navbar,
 * no footer/contact block and none of the pill background. Every other route gets
 * the full chrome, so the layout hands the pieces in as already-rendered nodes and
 * this only decides whether to show them.
 */
const BARE_ROUTES = new Set(["/licensed-assets"]);

export default function SiteChrome({
  background,
  nav,
  footer,
  children,
}: {
  background: React.ReactNode;
  nav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const bare = BARE_ROUTES.has(usePathname());

  if (bare) return <>{children}</>;

  return (
    <>
      {background}
      <div className="relative z-10 flex w-full flex-col items-center overflow-clip">
        {nav}
        {children}
        {footer}
      </div>
    </>
  );
}
