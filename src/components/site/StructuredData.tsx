import { jsonLd } from "@/lib/seo";

/**
 * Renders one or more JSON-LD blocks. Server component, so the markup is in the
 * initial HTML where crawlers will see it without running scripts.
 */
export default function StructuredData({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(d)}
        />
      ))}
    </>
  );
}
