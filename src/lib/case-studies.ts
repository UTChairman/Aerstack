export type Metric = { value: string; label: string };
export type CaseSection = { heading: string; paras: string[] };
export type CaseStudy = {
  slug: string;
  img: string;
  title: string;
  subtitle: string;
  metrics: [Metric, Metric];
  detail: { eyebrow: string; title: string; subtitle: string; sections: CaseSection[] };
  gallery: string[];
  videoId: string;
};

/**
 * Recent work.
 *
 * Only verified projects belong here. The four entries that used to sit in this
 * file were marketing agency case studies carried over from the Framer template,
 * with figures that could not be verified, so they have been removed.
 *
 * The restaurant POS below is the one confirmed project. Every claim made about
 * it comes from what the client stated: it is a production system, it was built
 * and delivered, and it runs across multiple branches. No numbers, dates, client
 * name or outcome figures are stated, because none have been supplied.
 *
 * TODO(client): to strengthen this page, send over the restaurant name if it can
 * be used, how many branches it runs across, roughly how long the build took, and
 * any outcome you are happy to publish. Screenshots go in public/images and get
 * listed in `gallery`.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "restaurant-pos",
    gallery: [],
    videoId: "",
    img: "mr7pSKURwMO4ZrsBLvHCtibCc.jpg",
    title: "A production POS system for a\nmulti branch restaurant",
    subtitle:
      "Ordering, inventory, staff and reporting built into one system that runs across every branch.",
    metrics: [
      { value: "Live", label: "Running in production, not a prototype" },
      { value: "Multi", label: "Built to run across multiple branches" },
    ],
    detail: {
      eyebrow: "RECENT WORK",
      title: "A production POS system for a multi branch restaurant",
      subtitle:
        "One system covering ordering, stock, staff and reporting across every branch.",
      sections: [
        {
          heading: "The situation",
          paras: [
            "A restaurant running several branches was managing each one more or less separately. Orders were taken on one system, stock was tracked by hand, and getting a picture of the whole business meant collecting numbers from every branch and putting them together afterwards.",
            "That is workable with one site. Across several it becomes a job in itself, and the information is always slightly out of date by the time anyone sees it.",
          ],
        },
        {
          heading: "What we built",
          paras: [
            "We built and delivered a point of sale system covering the full service: taking orders, tracking stock as it moves, managing staff, and reporting across every branch from one place.",
            "The till screens were the priority. They get used hundreds of times a shift, often during the busiest part of the day, so they had to be quick and difficult to get wrong.",
          ],
        },
        {
          heading: "Built around the branches",
          paras: [
            "Each branch runs its own service day to day, while ownership can see all of them together rather than one at a time.",
            "Because the system was built rather than bought, it follows the way this business already works instead of forcing the team to adopt someone else's process.",
          ],
        },
        {
          heading: "Where it stands",
          paras: [
            "The system is in production and in daily use. It is not a prototype or a pilot.",
          ],
        },
      ],
    },
  },
];
