import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Profile } from './components/Profile.jsx'
import { Projects } from './components/Projects.jsx'
import { ResumeButton } from './components/ResumeButton.jsx'
import { SocialLinks } from './components/SocialLinks.jsx'
import { portfolio } from './data/portfolio.js'
import './styles/components.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main className="portfolio" id="main-content">
        <Profile profile={portfolio.profile} />
        <ResumeButton resumeUrl={portfolio.resumeUrl} />
        <Projects projects={portfolio.projects} />
        <SocialLinks links={portfolio.socialLinks} />
        <Contact contact={portfolio.contact} />
        <Footer footer={portfolio.footer} />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
