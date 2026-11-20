'use client'

import { useEffect, useRef, useState } from 'react'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error
      if (!errorId) return
      const ids = (el.getAttribute('aria-describedby') || '')
        .split(/\s+/)
        .filter((id) => id && id !== errorId)
      if (shown) ids.push(errorId)
      if (ids.length) el.setAttribute('aria-describedby', ids.join(' '))
      else el.removeAttribute('aria-describedby')
    }

    const syncAria = (el: EventTarget | null) => {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) {
        return
      }
      const isInvalid = el.matches(':user-invalid')
      if (isInvalid) {
        el.setAttribute('aria-invalid', 'true')
        linkError(el, true)
      } else {
        el.setAttribute('aria-invalid', 'false')
        linkError(el, false)
      }
    }

    form
      .querySelectorAll('input, select, textarea')
      .forEach((el) => el.setAttribute('aria-invalid', 'false'))

    const onBlur = (e: FocusEvent) => syncAria(e.target)
    const onInput = (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.hasAttribute('aria-invalid')) {
        syncAria(e.target)
      }
    }
    const onInvalid = (e: Event) => syncAria(e.target)

    form.addEventListener('blur', onBlur, true)
    form.addEventListener('input', onInput)
    form.addEventListener('invalid', onInvalid, true)

    return () => {
      form.removeEventListener('blur', onBlur, true)
      form.removeEventListener('input', onInput)
      form.removeEventListener('invalid', onInvalid, true)
    }
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(':invalid')
      firstInvalid?.focus()
      return
    }

    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const service = String(data.get('service') || '').trim()
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(`[Meska IT] ${service} — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${message}`,
    )

    window.location.href = `mailto:hello@meskait.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('hello@meskait.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback ignored if clipboard permission denied
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Direct Inbox
          </p>
          <a
            href="mailto:hello@meskait.com"
            className="mt-1 inline-block text-lg font-semibold text-white hover:text-sky-300"
          >
            hello@meskait.com
          </a>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-200 transition hover:border-sky-400/50 hover:text-white"
        >
          {copied ? 'Copied!' : 'Copy email'}
        </button>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="meska-field">
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              placeholder="Alex Rivera"
              data-error="name-error"
              className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-400"
            />
            <p id="name-error" className="error-msg mt-1.5 items-center gap-1.5 text-xs text-red-400">
              <span aria-hidden="true">!</span> Please enter your name (at least 2 characters).
            </p>
          </div>

          <div className="meska-field">
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-200">
              Work Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              data-error="email-error"
              className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-400"
            />
            <p id="email-error" className="error-msg mt-1.5 items-center gap-1.5 text-xs text-red-400">
              <span aria-hidden="true">!</span> Enter an email address in the format you@company.com.
            </p>
          </div>
        </div>

        <div className="meska-field">
          <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-gray-200">
            How can we help?
          </label>
          <select
            id="contact-service"
            name="service"
            required
            defaultValue="AI & Workflow Automation"
            className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-sky-400"
          >
            <option value="AI & Workflow Automation">AI &amp; Workflow Automation Setup</option>
            <option value="Business IT Retainer">Business IT &amp; Cloud Management</option>
            <option value="On-Demand Remote Support">On-Demand Remote Support ($20 / 30 min)</option>
          </select>
        </div>

        <div className="meska-field">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-200">
            Project or issue details
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            minLength={10}
            placeholder="Tell us about your team size, tools (Slack, M365, Google Workspace), or what you want to automate..."
            data-error="message-error"
            className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-400"
          />
          <p id="message-error" className="error-msg mt-1.5 items-center gap-1.5 text-xs text-red-400">
            <span aria-hidden="true">!</span> Please include a brief description (at least 10 characters).
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          Send Inquiry to hello@meskait.com
        </button>

        {submitted && (
          <p className="rounded-lg border border-sky-400/30 bg-sky-400/10 px-3.5 py-2.5 text-xs text-sky-200">
            Your email client should open with a pre-filled draft to{' '}
            <span className="font-semibold">hello@meskait.com</span>. If it didn&apos;t open,
            click &ldquo;Copy email&rdquo; above and send it directly.
          </p>
        )}
      </form>
    </div>
  )
}
