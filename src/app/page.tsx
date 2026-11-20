import { MeskaEmblem, MeskaLogo } from '@/components/Logo'
import { StarField } from '@/components/StarField'
import { ContactForm } from '@/components/ContactForm'

const services = [
  {
    tag: '01 / AUTOMATION',
    title: 'AI & Workflow Automation',
    description:
      'Eliminate repetitive manual work across your team. We design, connect, and deploy practical AI workflows that run inside the tools you already use.',
    bullets: [
      'Internal Slack & Teams IT/ops copilots',
      'Automated employee onboarding & offboarding',
      'Inbox triage, CRM sync & document routing',
      'Custom n8n, Zapier & API integrations',
    ],
  },
  {
    tag: '02 / MANAGED IT',
    title: 'Cloud, Security & Device Ops',
    description:
      'Keep your laptops, accounts, and company data locked down without hiring a full-time IT department. Built for lean teams of 5 to 50.',
    bullets: [
      'Google Workspace & Microsoft 365 admin',
      'Zero-touch MDM (Intune, Mosyle, Jamf)',
      'MFA enforcement, 1Password & SSO setup',
      'Automated encrypted backups & DNS security',
    ],
  },
  {
    tag: '03 / REMOTE DESK',
    title: 'On-Demand Remote Support',
    description:
      'Fast, encrypted remote troubleshooting for macOS and Windows via RustDesk. Ideal for urgent fixes, software setups, and performance recovery.',
    bullets: [
      'Crash, freeze & slow-boot diagnostics',
      'Software installs, migrations & OS upgrades',
      'Data recovery & local backup setup',
      'No fix, no fee guarantee on single sessions',
    ],
  },
]

const steps = [
  {
    num: '01',
    title: '15-Min Stack & Workflow Audit',
    body: 'We review your current tools, security gaps, and the manual tasks costing your team hours every week.',
  },
  {
    num: '02',
    title: 'Build, Secure & Automate',
    body: 'We lock down your accounts and devices, then ship your custom AI workflows and integrations with full documentation.',
  },
  {
    num: '03',
    title: 'Ongoing Support & Monitoring',
    body: 'Fast remote helpdesk whenever someone gets stuck, plus continuous maintenance as your team and stack grow.',
  },
]

const tiers = [
  {
    name: 'Remote Fix Session',
    price: '$20',
    unit: '/ 30 min',
    highlight: false,
    description: 'Fast 1-on-1 remote troubleshooting for individuals and urgent workstation issues.',
    features: [
      '90% of issues resolved under 30 minutes',
      'Encrypted RustDesk remote session',
      'macOS & Windows support',
      'No fix, no fee guarantee',
    ],
    cta: 'Book a Session',
  },
  {
    name: 'Business IT + AI Retainer',
    price: '$125',
    unit: '/ user / mo',
    highlight: true,
    description: 'Complete IT management plus ongoing AI workflow automation for growing teams.',
    features: [
      'Unlimited remote helpdesk support',
      'Google Workspace / M365 & MDM admin',
      'MFA, security hardening & backups',
      '1 custom AI workflow built every quarter',
    ],
    cta: 'Start Retainer',
  },
  {
    name: 'AI Automation Sprint',
    price: 'Custom',
    unit: 'fixed scope',
    highlight: false,
    description: 'Dedicated 2-week sprint to scope, build, and deploy custom AI agents & automations.',
    features: [
      'End-to-end workflow architecture',
      'Slack, email, CRM & API integrations',
      'Staff handoff & SOP documentation',
      '30 days of post-launch tuning',
    ],
    cta: 'Scope a Sprint',
  },
]

const faqs = [
  {
    q: 'What kinds of AI workflows do you actually build?',
    a: 'Practical, high-ROI automations: internal Slack/Teams helpdesk bots trained on your SOPs, automated new-hire account provisioning, client intake triage, invoice/receipt routing, and CRM updates using OpenAI/Claude APIs and n8n.',
  },
  {
    q: 'Do you only work with companies in Miami?',
    a: 'We are based in Miami, FL and support local businesses on-site when needed, while serving startups and small businesses nationwide over encrypted remote sessions and cloud admin.',
  },
  {
    q: 'How does the $20 / 30-minute remote session work?',
    a: 'Email hello@meskait.com with a screenshot or short description of your issue. We connect via RustDesk (open-source, encrypted remote desktop), fix the problem, and you only pay after it is resolved.',
  },
  {
    q: 'What tools and platforms do you support?',
    a: 'Google Workspace, Microsoft 365, macOS, Windows, Cloudflare, Vercel, RustDesk, Tailscale, 1Password/Bitwarden, n8n, Slack, and major AI model APIs.',
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
            <a href="#services" className="transition hover:text-white">
              Services
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
            Get Support
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-medium tracking-wide text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              MIAMI BASED · REMOTE NATIONWIDE · 10+ YEARS EXPERIENCE
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IT Support &amp; AI Automation{' '}
              <span className="text-sky-300">Built for Speed.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Meska IT keeps your company&apos;s devices, cloud workspace, and security locked
              down—while building practical AI workflows that eliminate repetitive busywork.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-sky-300"
              >
                Book a Free 15-Min Audit
              </a>
              <a
                href="mailto:hello@meskait.com"
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/10"
              >
                hello@meskait.com
              </a>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Trusted Stack &amp; Platforms
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-400">
                <span>Google Workspace</span>
                <span>Microsoft 365</span>
                <span>RustDesk</span>
                <span>Cloudflare</span>
                <span>n8n &amp; OpenAI</span>
                <span>Proton</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-meska text-xs tracking-widest text-sky-400">SERVICES</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Everything your IT &amp; ops stack needs
            </h2>
            <p className="mt-3 text-gray-400">
              From urgent 30-minute remote fixes to full business automation and cloud management.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gray-900/60 p-7 backdrop-blur-sm transition hover:border-sky-400/40"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
                  {service.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-gray-300">
                  {service.bullets.map((b) => (
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

        {/* Process */}
        <section id="process" className="border-y border-white/10 bg-gray-900/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="font-meska text-xs tracking-widest text-sky-400">PROCESS</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Simple, zero-jargon execution
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
              Transparent pricing, zero surprises
            </h2>
            <p className="mt-3 text-gray-400">
              Start with a single remote session or lock in predictable monthly IT &amp; AI support.
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
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
                  {tier.highlight && (
                    <span className="rounded-full bg-sky-400/15 px-2.5 py-0.5 text-xs font-semibold text-sky-300">
                      Popular
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
                <summary className="flex items-center justify-between gap-4 text-left text-sm font-semibold text-white sm:text-base">
                  <span>{item.q}</span>
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
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 pt-12">
          <div className="mb-8 text-center">
            <p className="font-meska text-xs tracking-widest text-sky-400">CONTACT</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to streamline your IT?
            </h2>
            <p className="mt-3 text-gray-400">
              Send a message below or email{' '}
              <a href="mailto:hello@meskait.com" className="text-sky-300 hover:underline">
                hello@meskait.com
              </a>
              .
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
            <a href="#services" className="hover:text-white">
              Services
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
