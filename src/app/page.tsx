import { MeskaEmblem, MeskaLogo } from '@/components/Logo'
import { StarField } from '@/components/StarField'
import { ContactForm } from '@/components/ContactForm'

const blueprints = [
  {
    tag: '01 / LEAD & BOOKING',
    title: 'Bilingual (EN/ES) Lead & Booking Agent',
    description:
      'Stop losing Miami leads to slow replies. Our AI responds to web forms, SMS, WhatsApp, and missed calls in under 10 seconds in fluent English or Spanish.',
    bullets: [
      'Instant English & Spanish qualification 24/7',
      'Direct Google Calendar / CRM appointment booking',
      'Automated follow-up sequences & owner SMS alerts',
      'Zero per-seat SaaS lock-in',
    ],
  },
  {
    tag: '02 / DOCUMENT AUTOPILOT',
    title: 'Invoice, PO & BOL Document Autopilot',
    description:
      'Drop PDFs into a private upload portal or forward them to invoices@. AI extracts line items, totals, due dates, and renewal risks in seconds.',
    bullets: [
      'Extracts invoices, POs, quotes & bills of lading',
      'Flags auto-renewal traps, due dates & price changes',
      'Syncs cleanly to QuickBooks, Sheets, or Slack',
      '1-click human approval before posting',
    ],
  },
  {
    tag: '03 / PRIVATE COPILOT',
    title: 'Private Company Docs & Ops Copilot',
    description:
      'Turn your SOPs, pricing sheets, menus, and client manuals into a private AI assistant inside Slack, WhatsApp, or your team portal.',
    bullets: [
      'Answers staff questions with exact file citations',
      'Connects Google Drive, Nextcloud, Notion & M365',
      'Runs on private infrastructure & zero-training APIs',
      'Cuts repetitive owner & manager interruptions',
    ],
  },
]

const industries = [
  {
    title: 'Doral Logistics & Importers',
    description:
      'Automated BOL, customs paperwork & vendor PO extraction into spreadsheets and ERPs.',
  },
  {
    title: 'Clinics & Medspas',
    description:
      '24/7 bilingual EN/ES WhatsApp/SMS lead intake, reminders, and consultation booking.',
  },
  {
    title: 'Real Estate & Property Mgmt',
    description:
      'Instant bilingual tenant/buyer qualification, lease parsing, and maintenance triage.',
  },
  {
    title: 'Contractors, Law & Hospitality',
    description:
      'Proposal/invoice triage, vendor quote comparisons, and instant staff SOP copilots.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Free 15-Min Workflow Audit',
    body: 'Bring 2–3 real PDFs, messy inboxes, or lead bottlenecks. We calculate ROI and show a live working demo.',
  },
  {
    num: '02',
    title: '7-Day Fixed-Price Private Build',
    body: 'We deploy your workflow on self-hosted n8n and private cloud infrastructure—you own your data and workflows.',
  },
  {
    num: '03',
    title: 'Managed Hosting & Tuning',
    body: 'We monitor uptime, handle API/model upgrades, and add new automations as your volume scales.',
  },
]

const tiers = [
  {
    name: 'Executive AI Audit & Workshop',
    price: '$1,500',
    unit: 'one-time',
    highlight: false,
    badge: null,
    description:
      '90-minute on-site (Coral Gables, Brickell, Doral) or remote workshop for leadership teams ready to map real ROI.',
    features: [
      'Live AI prototype built on your real documents',
      '3 highest-ROI workflow blueprints prioritized',
      'Hands-on team Q&A in English or Spanish',
      '100% credited toward your first build within 30 days',
    ],
    cta: 'Book Workshop',
  },
  {
    name: 'Turnkey AI Blueprint',
    price: '$3,500',
    unit: 'fixed build',
    highlight: true,
    badge: 'Most Popular',
    description:
      'One complete production AI workflow deployed privately in 7 days. Optional $750/mo managed hosting & monitoring.',
    features: [
      'Any 1 core blueprint customized to your stack',
      'Private self-hosted n8n instance (no Zapier tax)',
      'Bilingual EN/ES prompts & human-in-the-loop alerts',
      'Team handoff video, SOPs & 30 days of tuning',
    ],
    cta: 'Start a 7-Day Build',
  },
  {
    name: 'Dedicated Automation Partner',
    price: '$2,500',
    unit: '/ month',
    highlight: false,
    badge: null,
    description:
      'Ongoing multi-workflow engineering and managed AI hosting for 10–50 person teams automating operations every month.',
    features: [
      'Continuous new workflows & prompt optimization',
      '24/7 execution monitoring & error recovery',
      'Private Nextcloud AI-Inbox & Slack/WhatsApp copilots',
      'Includes Google Workspace / M365 security hardening',
    ],
    cta: 'Apply for Partnership',
  },
]

const faqs = [
  {
    q: 'Is my company data kept private, or does it train public AI models?',
    a: 'Your workflows run on your own private self-hosted n8n and Nextcloud infrastructure paired with paid-tier Claude, Gemini, and OpenAI enterprise APIs—where inputs are never used to train public models.',
  },
  {
    q: 'How are you different from big AI consulting agencies?',
    a: 'We ship productized, fixed-price blueprints in 7 days instead of selling 3-month strategy decks and $25k–$75k custom retainers. You see a working prototype on your real data before scaling.',
  },
  {
    q: 'Why do you build on self-hosted n8n instead of Zapier or Make?',
    a: 'Self-hosted n8n eliminates per-task pricing spikes as your volume grows, keeps sensitive documents on private servers you control, and connects cleanly with Claude, Gemini, OpenAI, WhatsApp, and custom APIs.',
  },
  {
    q: 'Do you work on-site in Miami and support Spanish-speaking teams?',
    a: 'Yes. We are based in Miami serving Coral Gables, Brickell, Doral, and South Miami with on-site executive workshops and fluent bilingual English/Spanish workflows, plus remote delivery nationwide.',
  },
]

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-gray-950 text-gray-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-18rem] h-[42rem] w-[72rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(14,165,233,0.08) 45%, transparent 70%)',
          }}
        />
        <StarField className="left-1/2 top-0 -translate-x-1/2 opacity-50" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 text-white">
            <MeskaLogo className="h-7 w-auto" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#blueprints" className="transition hover:text-white">
              Blueprints
            </a>
            <a href="#industries" className="transition hover:text-white">
              Industries
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-sky-300"
          >
            Book Free Audit
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-medium tracking-wide text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              MIAMI, FL &middot; ENGLISH &amp; ESPA&Ntilde;OL &middot; DEPLOYED IN 7 DAYS
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Workflow Automation{' '}
              <span className="text-sky-300">Without Enterprise Bloat.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Fixed-price AI agents and document automations for 5&ndash;50 person South Florida
              businesses. Deployed privately on your own server in 7 days&mdash;no $50k retainers,
              no per-task Zapier markups.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-sky-300"
              >
                Book a Free 15-Min Workflow Audit
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/10"
              >
                See Fixed Pricing
              </a>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Trusted Stack &amp; Platforms
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
                <span>n8n (Self-Hosted)</span>
                <span>Claude &amp; Gemini APIs</span>
                <span>WhatsApp &amp; Slack</span>
                <span>QuickBooks &amp; CRMs</span>
                <span>Nextcloud</span>
                <span>Google Workspace &amp; M365</span>
              </div>
            </div>
          </div>
        </section>

        {/* Productized Blueprints */}
        <section id="blueprints" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-meska text-xs tracking-widest text-sky-400">PRODUCTIZED BLUEPRINTS</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              High-ROI automations shipped in 7 days
            </h2>
            <p className="mt-3 text-gray-400">
              Proven, fixed-scope AI systems tailored to your exact tools&mdash;no six-month
              consulting discoveries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blueprints.map((blueprint) => (
              <div
                key={blueprint.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gray-900/60 p-7 backdrop-blur-sm transition hover:border-sky-400/40"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
                  {blueprint.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {blueprint.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {blueprint.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-gray-300">
                  {blueprint.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Miami Industries */}
        <section id="industries" className="border-t border-white/10 bg-gray-900/20 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="font-meska text-xs tracking-widest text-sky-400">MIAMI INDUSTRIES</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Built for South Florida operators
              </h2>
              <p className="mt-3 text-gray-400">
                Real workflows modeled after the daily bottlenecks of Miami-Dade and Broward teams.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-2xl border border-white/10 bg-gray-950/70 p-6 transition hover:border-sky-400/40"
                >
                  <h3 className="font-display text-base font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-y border-white/10 bg-gray-900/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="font-meska text-xs tracking-widest text-sky-400">PROCESS</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                From bottleneck to live automation in 7 days
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.num} className="relative rounded-2xl border border-white/10 bg-gray-950/70 p-6">
                  <span className="font-meska text-2xl text-sky-400">{step.num}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-meska text-xs tracking-widest text-sky-400">PRICING</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Transparent fixed pricing, zero agency bloat
            </h2>
            <p className="mt-3 text-gray-400">
              Start with a working executive workshop, deploy a single turnkey blueprint in 7 days,
              or keep us on retainer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.highlight
                    ? 'flex flex-col rounded-2xl border-2 border-sky-400/70 bg-gray-900/80 p-7 shadow-lg shadow-sky-500/10'
                    : 'flex flex-col rounded-2xl border border-white/10 bg-gray-900/50 p-7'
                }
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
                  {tier.badge && (
                    <span className="flex-none rounded-full bg-sky-400/15 px-2.5 py-0.5 text-xs font-semibold text-sky-300">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-gray-400">{tier.unit}</span>
                </div>

                <p className="mt-3 text-sm text-gray-400">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-5 text-sm text-gray-300">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={
                    tier.highlight
                      ? 'mt-7 block rounded-lg bg-sky-400 px-4 py-2.5 text-center text-sm font-semibold text-gray-950 transition hover:bg-sky-300'
                      : 'mt-7 block rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/10'
                  }
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="meska-accordion mx-auto max-w-3xl px-6 py-16">
          <div className="text-center">
            <p className="font-meska text-xs tracking-widest text-sky-400">FAQ</p>
            <h2 id="faq-heading" className="mt-2 font-display text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-white/10 bg-gray-900/60 px-5 py-4 transition open:border-sky-400/40"
              >
                <summary className="flex items-center gap-3 text-left text-sm font-semibold text-white sm:text-base">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="faq-chevron h-5 w-5 flex-none text-sky-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item.q}</span>
                </summary>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 pt-12">
          <div className="mb-8 text-center">
            <p className="font-meska text-xs tracking-widest text-sky-400">CONTACT</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to automate your biggest bottleneck?
            </h2>
            <p className="mt-3 text-gray-400">
              Book a free 15-minute workflow audit below or email{' '}
              <a href="mailto:hello@meskait.com" className="text-sky-300 hover:underline">
                hello@meskait.com
              </a>{' '}
              &mdash; hablo espa&ntilde;ol.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-gray-950/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 sm:flex-row">
          <div className="flex items-center gap-3">
            <MeskaEmblem className="h-6 w-6 text-white" />
            <span>Meska IT &middot; Miami, FL &middot; &copy; 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@meskait.com" className="hover:text-white">
              hello@meskait.com
            </a>
            <a href="#blueprints" className="hover:text-white">
              Blueprints
            </a>
            <a href="#industries" className="hover:text-white">
              Industries
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
