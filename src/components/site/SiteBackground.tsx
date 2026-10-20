/**
 * Fixed site background — verbatim from the live site:
 *  • base #0a0a0a tiled with a 24×40 "rounded pill" SVG pattern in #171717
 *  • a radial fade on top so the pattern only reads near the upper centre
 * Sits behind all content (z-0); page content must be z-10+.
 */
const PILLS =
  "url(\"data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23171717' fill-rule='evenodd'/%3E%3C/svg%3E\")";

export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-full overflow-hidden"
    >
      {/* Pill pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgb(10, 10, 10)",
          backgroundImage: PILLS,
          // live site scales the 24×40 tile up 5.4×
          backgroundSize: "129.6px 216px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(43.2% 25% at 50% 18.8%, rgba(84, 84, 84, 0) 0%, rgb(10, 10, 10) 100%)",
        }}
      />
    </div>
  );
}
