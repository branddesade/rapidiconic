import { MeskaEmblem, MeskaLogo } from '@/components/Logo'
import { StarField } from '@/components/StarField'
import { ContactForm } from '@/components/ContactForm'

const solutions = [
  {
    tag: '01 / LEADS & BOOKINGS',
    title: '24/7 English & Spanish Lead Responder',
    description:
      'Stop losing Miami customers to slow replies. Our system responds to website inquiries, text messages, WhatsApp, and missed calls in under 10 seconds—in natural English or Spanish.',
    bullets: [
      'Answers questions and pre-screens leads in English or Spanish, 24/7',
      'Books appointments straight onto your Google or Outlook Calendar',
      'Follows up automatically and texts you when a hot lead is ready',
      'No per-employee monthly software fees—you own the setup',
    ],
  },
  {
    tag: '02 / INVOICES & PAPERWORK',
    title: 'Automatic Invoice & Paperwork Entry',
    description:
      'Forward PDFs by email or drop them into a private folder. The system reads line items, totals, due dates, and surprise price hikes in seconds—with zero manual typing.',
    bullets: [
      'Reads invoices, purchase orders, vendor quotes, and bills of lading',
      'Flags surprise price hikes, upcoming due dates, and auto-renewal traps',
      'Sends clean entries to QuickBooks, Excel, Google Sheets, or your inbox',
      'Your team approves every entry with 1 click before it goes into QuickBooks',
    ],
  },
  {
    tag: '03 / TEAM ANSWERS',
    title: 'Private Company File & Handbook Assistant',
    description:
      'Turn your pricing sheets, service menus, training manuals, and policies into a private assistant your staff can message on WhatsApp, Slack, or any phone or computer.',
    bullets: [
      'Answers staff questions and shows the exact document it came from',
      'Connects to your existing Google Drive, Microsoft OneDrive, or company folders',
      '100% private—your files are never shared with public ChatGPT or outside tools',
      'Cuts the constant "what do we charge?" and "where is that file?" interruptions',
    ],
  },
]

const industries = [
  {
    title: 'Doral Logistics & Importers',
    description:
      'Turn bills of lading, customs forms, and vendor purchase orders straight into your spreadsheets and inventory software—without hours of typing.',
  },
  {
    title: 'Clinics & Medspas',
    description:
      '24/7 English and Spanish WhatsApp and text replies, appointment reminders, and consultation booking so no new patient slips away.',
  },
  {
    title: 'Real Estate & Property Mgmt',
    description:
      'Instant English and Spanish replies to buyers and tenants, key lease dates pulled automatically, and maintenance requests sent to the right person.',
  },
  {
    title: 'Contractors, Law & Hospitality',
    description:
      'Compare vendor quotes side by side, process invoices faster, and give your crew instant answers from your company manuals.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Free 15-Min Live Demo',
    body: 'Bring 2–3 real invoices, a messy inbox, or your current lead process. We calculate the hours saved and show you a working preview.',
  },
  {
    num: '02',
    title: '7-Day Fixed-Price Setup',
    body: 'We build and connect your system privately around the tools you already use. You own everything we build, with no hidden add-ons.',
  },
  {
    num: '03',
    title: 'Optional Ongoing Support',
    body: 'Keep us on if you want hands-off maintenance—we make sure everything keeps running smoothly, handle software updates, and make tweaks as you grow.',
  },
]

const tiers = [
  {
    name: 'Executive AI Workshop',
    price: '$1,500',
    unit: 'one-time',
    highlight: false,
    badge: null,
    description:
      'A 90-minute in-person session (Coral Gables, Brickell, Doral) or video call for owners and managers who want real results, not hype.',
    features: [
      'Live working demo built using your actual company documents',
      'Your top 3 time-saving opportunities ranked by payback',
      'Hands-on team Q&A in English or Spanish',
      '100% credited toward your first system if you start within 30 days',
    ],
    cta: 'Book Workshop',
  },
  {
    name: 'Done-For-You AI System',
    price: '$3,500',
    unit: 'one-time setup',
    highlight: true,
    badge: 'Most Popular',
    description:
      'One complete AI system built, tested, and running privately for your business in 7 days. Optional $750/mo for ongoing support and maintenance.',
    features: [
      'Any 1 core system customized to the tools you already use',
      'Runs on a private setup you own—no surprise fees per message or invoice',
      'Fluent English & Spanish replies with human approval before key actions',
      'Plain-English training videos, step-by-step guides & 30 days of adjustments',
    ],
    cta: 'Start Your 7-Day Setup',
  },
  {
    name: 'Dedicated Automation Partner',
    price: '$2,500',
    unit: '/ month',
    highlight: false,
    badge: null,
    description:
      'Your outsourced automation team for 10–50 person companies looking to eliminate more manual work every month.',
    features: [
      'New automations added and refined every month as needs come up',
      '24/7 monitoring so if anything breaks, we fix it before you notice',
      'Private document upload folder plus WhatsApp & team chat assistants',
      'Includes security setup for your company Google & Microsoft accounts',
    ],
    cta: 'Discuss Monthly Support',
  },
]

const faqs = [
  {
    q: 'Is my company data kept private, or does it get shared with public AI?',
    a: 'Your data stays strictly private. Everything runs on a dedicated private setup that you own and control, using paid business AI accounts (like ChatGPT for Business, Google, and Claude) that are contractually barred from sharing your files or using them to train public AI.',
  },
  {
    q: 'What if the AI makes a mistake with a customer or an invoice?',
    a: 'We build strict guardrails into every system. Lead responders only answer from your approved pricing and policies—and hand off tricky questions straight to a human. For invoices and bookkeeping, your team approves entries with 1 click before anything goes into QuickBooks or your spreadsheets.',
  },
  {
    q: 'How are you different from big AI consulting agencies?',
    a: 'Big agencies charge $25,000–$75,000 and spend months writing strategy slide decks. We build proven, fixed-price systems in 7 days—and we show you a working preview using your own real documents before you commit to expanding.',
  },
  {
    q: 'Will I get hit with rising monthly software bills or lose control if we stop working together?',
    a: 'No. Many agencies stitch tools together on third-party platforms that charge you extra for every message or invoice you process—and hold your setup hostage if you leave. We build on software you own and control. You only pay the small direct utility cost to run it (typically $20–$50/month paid straight to your own accounts), and you keep everything even without ongoing support.',
  },
  {
    q: 'Do I need an IT person, or will my staff have to learn complicated new software?',
    a: 'Not at all. We handle the entire setup from start to finish, and your team keeps using the tools they already know—WhatsApp, email, QuickBooks, and spreadsheets. We also record short walkthrough videos in English or Spanish so anyone on your staff can use it on day one.',
  },
  {
    q: 'Do you work on-site in Miami and support Spanish-speaking teams?',
    a: 'Yes. We are based in Miami and meet in person across Coral Gables, Brickell, Doral, and South Miami. Everything we build works naturally in English and Spanish, and we also support clients remotely nationwide.',
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
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#industries" className="transition hover:text-white">
              Industries
            </a>
            <a href="#process" className="transition hover:text-white">
              How It Works
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
            Book Free Demo
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-medium tracking-wide text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              MIAMI, FL &middot; ENGLISH &amp; ESPA&Ntilde;OL &middot; LIVE IN 7 DAYS
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Cut Hours of Busywork.
              <span className="mt-1 block text-sky-300">Practical AI in 7 Days.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Fixed-price AI systems for 5&ndash;50 person South Florida businesses&mdash;replying to
              leads in English &amp; Spanish, entering invoices automatically, and answering staff
              questions from your own files. Built around the tools you already use, with no $50k
              retainers and no surprise software bills as you grow.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-sky-300"
              >
                Book a Free 15-Min Live Demo
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
                Works With the Tools You Already Use
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
                <span>WhatsApp &amp; Text Messages</span>
                <span>Gmail &amp; Outlook</span>
                <span>QuickBooks</span>
                <span>Google Drive &amp; Excel</span>
                <span>Google &amp; Outlook Calendar</span>
                <span>Slack &amp; Microsoft Teams</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-meska text-xs tracking-widest text-sky-400">WHAT WE BUILD</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Three proven systems, live in 7 days
            </h2>
            <p className="mt-3 text-gray-400">
              Fixed-price AI tools built around the software you already use&mdash;no months of
              consulting meetings or slide decks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gray-900/60 p-7 backdrop-blur-sm transition hover:border-sky-400/40"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
                  {solution.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-gray-300">
                  {solution.bullets.map((b) => (
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
                Built for South Florida businesses
              </h2>
              <p className="mt-3 text-gray-400">
                Modeled around the daily paperwork and customer-response headaches of Miami-Dade and
                Broward teams.
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
              <p className="font-meska text-xs tracking-widest text-sky-400">HOW IT WORKS</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                From daily headache to live system in 7 days
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
              Clear fixed pricing, no agency surprises
            </h2>
            <p className="mt-3 text-gray-400">
              Start with a hands-on team workshop, launch one complete AI system in 7 days, or keep
              us on for ongoing monthly automation.
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
              Ready to take busywork off your team&apos;s plate?
            </h2>
            <p className="mt-3 text-gray-400">
              Book a free 15-minute live demo below or email{' '}
              <a href="mailto:hello@meskait.com" className="text-sky-300 hover:underline">
                hello@meskait.com
              </a>{' '}
              &mdash; hablamos espa&ntilde;ol.
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
            <a href="#solutions" className="hover:text-white">
              Solutions
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
