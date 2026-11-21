'use client'

import { useEffect, useRef, useState } from 'react'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const announcerRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const form = formRef.current
    const announcer = announcerRef.current
    if (!form) return

    let announceTimer: ReturnType<typeof setTimeout> | undefined
    let resetTimer: ReturnType<typeof setTimeout> | undefined
    let announcedField: HTMLElement | null = null

    const flagged = new WeakSet<Element>()
    const announced = new WeakSet<Element>()

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

    const spokenText = (node: HTMLElement) => {
      const copy = node.cloneNode(true) as HTMLElement
      copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove())
      copy.querySelectorAll('[role="img"][aria-label]').forEach((n) => {
        n.replaceWith(`${n.getAttribute('aria-label')}: `)
      })
      return (copy.textContent || '').replace(/\s+/g, ' ').trim()
    }

    const announceError = (
      el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    ) => {
      const errorId = el.dataset.error
      if (!errorId || !announcer) return
      const error = document.getElementById(errorId)
      if (!error) return
      const labelEl = el.labels?.[0]
      const label = labelEl ? `${spokenText(labelEl)}: ` : ''
      if (announceTimer) clearTimeout(announceTimer)
      announcer.textContent = ''
      announcedField = el
      announceTimer = setTimeout(() => {
        announcer.textContent = label + spokenText(error)
      }, 500)
    }

    const syncAria = (el: EventTarget | null, announce = false) => {
      if (
        !(
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        )
      ) {
        return
      }
      const isInvalid = el.matches(':user-invalid')
      if (isInvalid) {
        if (announce && !announced.has(el)) {
          announceError(el)
          announced.add(el)
        }
        el.setAttribute('aria-invalid', 'true')
        linkError(el, true)
        flagged.add(el)
      } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
        el.setAttribute('aria-invalid', 'false')
        linkError(el, false)
        flagged.delete(el)
        announced.delete(el)
        if (announcedField === el) {
          if (announceTimer) clearTimeout(announceTimer)
          if (announcer) announcer.textContent = ''
          announcedField = null
        }
      }
    }

    form
      .querySelectorAll('input, select, textarea')
      .forEach((el) => syncAria(el))

    const onBlur = (e: FocusEvent) => syncAria(e.target, true)
    const onInput = (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.hasAttribute('aria-invalid')) {
        syncAria(e.target)
      }
    }
    const onChange = (e: Event) => syncAria(e.target, true)
    const onInvalid = (e: Event) => {
      if (e.target instanceof Element) {
        announced.add(e.target)
      }
      syncAria(e.target)
    }
    const onReset = (e: Event) => {
      const targetForm = e.target
      if (!(targetForm instanceof HTMLFormElement)) return
      if (resetTimer) clearTimeout(resetTimer)
      resetTimer = setTimeout(() => {
        Array.from(targetForm.elements).forEach((el) => syncAria(el))
      })
    }

    form.addEventListener('blur', onBlur, true)
    form.addEventListener('input', onInput)
    form.addEventListener('change', onChange, true)
    form.addEventListener('invalid', onInvalid, true)
    form.addEventListener('reset', onReset, true)

    return () => {
      if (announceTimer) clearTimeout(announceTimer)
      if (resetTimer) clearTimeout(resetTimer)
      form.removeEventListener('blur', onBlur, true)
      form.removeEventListener('input', onInput)
      form.removeEventListener('change', onChange, true)
      form.removeEventListener('invalid', onInvalid, true)
      form.removeEventListener('reset', onReset, true)
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
      `Name: ${name}\nEmail: ${email}\nInterest: ${service}\n\nDetails:\n${message}`,
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
            Direct Miami Email
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

      <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

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
              <span role="img" aria-label="Error">!</span> Please enter your name (at least 2 characters).
            </p>
          </div>

          <div className="meska-field">
            <div className="mb-1.5 flex items-baseline justify-between gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-gray-200">
                Work Email
              </label>
              <span id="email-hint" className="text-xs text-gray-400">
                Format: you@company.com
              </span>
            </div>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              aria-describedby="email-hint"
              data-error="email-error"
              className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-400"
            />
            <p id="email-error" className="error-msg mt-1.5 items-center gap-1.5 text-xs text-red-400">
              <span role="img" aria-label="Error">!</span> Enter an email address in the format you@company.com.
            </p>
          </div>
        </div>

        <div className="meska-field">
          <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-gray-200">
            What are you most interested in?
          </label>
          <select
            id="contact-service"
            name="service"
            required
            defaultValue="Done-For-You AI System ($3,500)"
            className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-sky-400"
          >
            <option value="Done-For-You AI System ($3,500)">Done-For-You AI System ($3,500 one-time)</option>
            <option value="24/7 English & Spanish Lead Responder">24/7 English &amp; Spanish Lead Responder</option>
            <option value="Automatic Invoice & Paperwork Entry">Automatic Invoice &amp; Paperwork Entry</option>
            <option value="Private Company File & Handbook Assistant">Private Company File &amp; Handbook Assistant</option>
            <option value="Executive AI Workshop ($1,500)">Executive AI Workshop ($1,500)</option>
            <option value="Dedicated Automation Partner ($2,500/mo)">Dedicated Automation Partner ($2,500/mo)</option>
          </select>
        </div>

        <div className="meska-field">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-200">
            What repetitive task is slowing your team down?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            minLength={10}
            placeholder="Tell us your team size, the tools you use (WhatsApp, Gmail, Outlook, QuickBooks, Excel, Google Drive), and the repetitive task you want off your plate..."
            data-error="message-error"
            className="w-full rounded-lg border border-white/15 bg-gray-950/80 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-400"
          />
          <p id="message-error" className="error-msg mt-1.5 items-center gap-1.5 text-xs text-red-400">
            <span role="img" aria-label="Error">!</span> Please include a brief description (at least 10 characters).
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          Book Your Free 15-Min Live Demo
        </button>

        {submitted && (
          <p className="rounded-lg border border-sky-400/30 bg-sky-400/10 px-3.5 py-2.5 text-xs text-sky-200">
            Your email app should open with a pre-filled draft to{' '}
            <span className="font-semibold">hello@meskait.com</span>. If it didn&apos;t open,
            click &ldquo;Copy email&rdquo; above and send it directly.
          </p>
        )}
      </form>
    </div>
  )
}
