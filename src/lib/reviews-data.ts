export type PageReview = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

/**
 * Customer reviews for the /review page.
 *
 * Intentionally empty. The previous entries were marketing agency testimonials
 * inherited from the Framer template, and their attribution was inconsistent,
 * so they have been removed rather than reworded for the new positioning. The
 * page shows a clearly marked notice while these arrays are empty, and the
 * notice disappears on its own as soon as real reviews are added.
 *
 * TODO(client): add real quotes. For each one supply the wording, the person's
 * name, their business and city, and optionally an image filename in
 * public/images. Split them across the two columns below for the masonry layout.
 */
export const REVIEWS_LEFT: PageReview[] = [];

export const REVIEWS_RIGHT: PageReview[] = [];
