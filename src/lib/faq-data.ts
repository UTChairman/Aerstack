// Shared FAQ set used by the home page and the about page.
export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What exactly does Aerstack do?",
    a: "We are a digital solutions company. We build three things: websites that bring in calls, bookings and orders, management software such as POS, inventory, staff and reporting systems, and AI workflows that handle repetitive work like replying to enquiries, confirming bookings and sending reminders. Most clients start with one and add the others later.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Small and medium businesses of most kinds. Restaurants and cafes, clinics and practices, retail and wholesale, service businesses and agencies. If your business takes enquiries, bookings or orders, or your team repeats the same admin every day, we can usually help.",
  },
  {
    q: "Do I have to buy all three services?",
    a: "No. Each one stands on its own. Plenty of clients start with a website, or with one automation that is costing them the most time, and go from there. We will tell you honestly if you do not need something yet.",
  },
  {
    q: "How long does a project take?",
    a: "A website is usually a matter of weeks. A single automation is often live within a week. Management software depends entirely on scope and takes longer. We give you a realistic timeline after the first conversation rather than a number designed to win the work.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "None. We handle the build, the testing and the launch. At handover you get a short guide covering what you can change yourself and who to contact if you need something more. Anything you will want to update regularly is made editable by you.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Usually, yes. We connect to booking and calendar tools, messaging platforms, email, spreadsheets, payment providers and most common business systems. Sometimes the right answer is to connect to what you have rather than replace it, and we will say so.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need, so we do not publish one price for everything. Tell us about your business on a free consultation and we will come back with a clear scope and a fixed figure before any work starts. No ongoing commitment is required to have that conversation.",
  },
];
