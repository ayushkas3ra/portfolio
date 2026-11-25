import { useEffect, useRef, useState } from 'react'
import { Copy, Mail } from 'lucide-react'

export function Contact({ contact }) {
  const [copyStatus, setCopyStatus] = useState('')
  const statusTimer = useRef(null)

  useEffect(() => {
    return () => window.clearTimeout(statusTimer.current)
  }, [])

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard access is unavailable.')
      }

      await navigator.clipboard.writeText(contact.email)
      setCopyStatus('Email copied to clipboard.')
    } catch (error) {
      console.error('Unable to copy the contact email.', error)
      setCopyStatus('Could not copy email. Please copy it manually.')
    }

    window.clearTimeout(statusTimer.current)
    statusTimer.current = window.setTimeout(() => setCopyStatus(''), 2500)
  }

  if (!contact.email) {
    return null
  }

  return (
    <section className="section contact entrance" aria-labelledby="contact-heading">
      <h2 className="section__heading" id="contact-heading">
        {contact.heading}
      </h2>
      <div className="contact__details">
        <a className="contact__email" href={`mailto:${contact.email}`}>
          <Mail aria-hidden="true" size={17} />
          <span>{contact.email}</span>
        </a>
        <button
          className="copy-button"
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
        >
          <Copy aria-hidden="true" size={16} />
          <span>Copy</span>
        </button>
      </div>
      <p className="contact__status" role="status" aria-live="polite">
        {copyStatus}
      </p>
    </section>
  )
}
