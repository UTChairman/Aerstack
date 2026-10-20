/** "Our History / Mission / Vision" accordion — from the Framer component controls. */
export type HmvItem = { serial: string; title: string; body: string };

export const HMV_ITEMS: HmvItem[] = [
  {
    "serial": "01.",
    "title": "Our History",
    "body": "Aerstack started with a simple observation.\n\nWe kept seeing the same problem everywhere we \nlooked. Marketing agencies spending thousands \non ads, generating solid leads, and then losing \nmost of them — not to bad offers or weak \ntargeting, but to something far more fixable.\n\nSlow follow-up. No system. No structure.\n\nLeads sitting in spreadsheets for days. Sales \nreps following up once and giving up. Qualified \nbuyers going cold simply because nobody replied \nfast enough.\n\nWe knew the technology to fix this existed. \nn8n, OpenAI, CRM integrations, automated \nsequences — the tools were all there. They \njust needed to be wired together properly and \npointed at the right problem.\n\nSo we built Aerstack to do exactly that.\n\nOne niche. One problem. One focused solution."
  },
  {
    "serial": "02.",
    "title": "Our Mission",
    "body": "To make sure no marketing agency ever loses \na deal to slow follow-up again.\n\nWe build automated lead follow-up and \nqualification systems that work around the \nclock — so agency owners can focus on \ndelivering great work for their clients \ninstead of manually chasing leads that \nshould have converted weeks ago."
  },
  {
    "serial": "03.",
    "title": "Our Vision",
    "body": "A world where every marketing agency — \nregardless of size or team capacity — has \naccess to a sales pipeline that works \nautomatically, responds instantly, and \nnever drops the ball.\n\nWe believe the gap between a lead arriving \nand a deal getting closed should be handled \nby systems, not stress.\n\nThat is the future we are building toward. \nOne agency at a time."
  }
];
