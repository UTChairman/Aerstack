/** "Our History / Mission / Vision" accordion on the about page. */
export type HmvItem = { serial: string; title: string; body: string };

export const HMV_ITEMS: HmvItem[] = [
  {
    serial: "01.",
    title: "Our History",
    body: "Aerstack started with a simple observation.\n\nThe same problems kept turning up in business after business, and almost none of them were really about the work itself.\n\nA website that nobody could use properly on a phone. Stock counted by hand and typed into a spreadsheet that was wrong by lunchtime. Enquiries sitting unanswered because the person who answers them was serving customers. The same question answered by hand twenty times a week.\n\nNone of it was complicated. It was just never anybody's job to fix it.\n\nWe began with automation, because that is where the wasted time was easiest to see. Clients then asked whether we could build the system underneath it, and whether we could fix the website it all pointed at.\n\nSo that is what Aerstack became. Three things that work together: the website people find you through, the software that runs the business, and the automations that take the repetitive work off your team.",
  },
  {
    serial: "02.",
    title: "Our Mission",
    body: "To give small and medium businesses the kind of systems that usually only large companies can afford.\n\nNot software you have to bend your business around, and not a website you need a developer to change. Tools built around how you already work, handed over in a state you can actually run yourself.",
  },
  {
    serial: "03.",
    title: "Our Vision",
    body: "A world where running a business does not mean doing the same admin every day until something gets dropped.\n\nWhere a restaurant owner can see every branch from one screen, a clinic stops losing appointments to forgetfulness, and a shop knows what is selling without counting it by hand.\n\nThe repetitive part should be handled by systems. The judgement, the craft and the customers should be left to people.",
  },
];
