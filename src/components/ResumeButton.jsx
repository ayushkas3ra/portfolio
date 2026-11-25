import { ArrowUpRight, FileText } from 'lucide-react'

export function ResumeButton({ resumeUrl }) {
  if (!resumeUrl) {
    return null
  }

  return (
    <a
      className="resume-button"
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Google Docs resume in a new tab"
    >
      <FileText aria-hidden="true" size={18} />
      <span>View resume</span>
      <ArrowUpRight aria-hidden="true" className="resume-button__arrow" size={18} />
    </a>
  )
}
