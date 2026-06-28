import React, { useEffect, useState } from 'react'
import './App.css'

const logo = '/Nobackground_Mediqueueless.png'
const video = '/Health_Tech_Explainer_Video_Creation.mp4'

const flowSteps = ['Book', 'Prepare', 'Arrive', 'Consult', 'Diagnose', 'Pharmacy']

const outcomes = [
  ['Patients', 'Clearer arrival times, fewer unknowns, and a calmer journey through care.'],
  ['Care teams', 'Better preparation, smoother handoffs, and less pressure at crowded service points.'],
  ['Hospitals', 'A shared operational view of demand, bottlenecks, departments, and capacity.']
]

const capabilities = [
  'AI scheduling',
  'Arrival prediction',
  'Queue orchestration',
  'Department load signals',
  'USSD access',
  'Operational analytics'
]

const proof = [
  'Pilot-ready',
  'Research-backed',
  'Deep Learning Indaba',
  'Africa CDC',
  'Silicon Valley Fellowship',
  'Jim Leech Mastercard Foundation'
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-shell">
        <button className="logo-button" onClick={() => go('home')} aria-label="Mediqueueless home">
          <img src={logo} alt="Mediqueueless" />
        </button>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open navigation">
          <span />
          <span />
        </button>

        <nav className={`nav-actions ${open ? 'open' : ''}`}>
          <button onClick={() => go('platform')}>Product</button>
          <button onClick={() => go('video')}>Overview</button>
          <button onClick={() => go('ai')}>Intelligence</button>
          <button onClick={() => go('proof')}>Traction</button>
          <button className="demo-link" onClick={() => go('contact')}>Book a Demo</button>
        </nav>
      </div>
    </header>
  )
}

function CommandCenter() {
  return (
    <div className="command-center" aria-label="Mediqueueless product interface preview">
      <div className="command-top">
        <span>Patient Flow Command Center</span>
        <strong>Live</strong>
      </div>
      <div className="command-grid">
        <div className="command-card wide">
          <p>Demand forecast</p>
          <strong>11:40</strong>
          <span>Peak registration pressure expected</span>
          <div className="wave-bars">
            <i style={{ height: '42%' }} />
            <i style={{ height: '68%' }} />
            <i style={{ height: '55%' }} />
            <i style={{ height: '92%' }} />
            <i style={{ height: '72%' }} />
            <i style={{ height: '48%' }} />
          </div>
        </div>
        <div className="command-card orange">
          <p>Wait risk</p>
          <strong>14 min</strong>
          <span>Predicted average delay</span>
        </div>
        <div className="command-card">
          <p>Ready before arrival</p>
          <strong>82%</strong>
          <span>Patients prepared</span>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({ label, title, text }) {
  return (
    <div className="section-intro reveal">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    fetch('https://formsubmit.co/mediqueueless.ltd@gmail.com', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then((response) => {
      if (response.ok) {
        form.reset()
        setSent(true)
      }
    })
  }

  if (sent) {
    return (
      <div className="sent-message">
        <h3>Thank you.</h3>
        <p>We will follow up with next steps for your hospital or health system.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input type="hidden" name="_captcha" value="false" />
      <label>Name<input name="name" required /></label>
      <label>Work email<input name="email" type="email" required /></label>
      <label>Organization<input name="organization" required /></label>
      <label>Message<textarea name="message" rows="4" placeholder="Tell us about your facility and patient-flow goals." /></label>
      <button className="primary-button" type="submit">Book a Demo</button>
    </form>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <p className="section-label">Helping healthcare facilities deliver care, not queues.</p>
              <h1>Patient flow intelligence for African hospitals.</h1>
              <p>
                Mediqueueless helps care teams coordinate appointments, arrivals, departments, and resources through one calm operating layer.
              </p>
              <div className="hero-buttons">
                <button className="primary-button" onClick={() => scrollTo('contact')}>Book a Demo</button>
                <button className="secondary-button" onClick={() => scrollTo('video')}>Vision</button>
              </div>
            </div>

            <div className="hero-media reveal">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                poster="/peopleinqueue.png"
                aria-label="Mediqueueless healthcare technology overview"
              />
              <CommandCenter />
            </div>
          </div>
        </section>

        <section className="cinema-section" id="video">
          <div className="vision-panel reveal">
            <img src="/vision.png" alt="Patient viewing a confirmed appointment on a phone inside a hospital" />
            <div className="vision-content">
              <p className="section-label">The vision</p>
              <h2>A clearer way to coordinate care before bottlenecks build.</h2>
              <p>
                Mediqueueless connects each step of the patient journey so hospitals stay in sync and patients experience care that flows.
              </p>
              <span className="vision-rule" />
            </div>
            <div className="vision-tags" aria-hidden="true">
              <span>Appointments</span>
              <span>Registration</span>
              <span>Care teams</span>
            </div>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="container">
            <SectionIntro
              label="Platform"
              title="One operating view across the patient journey."
              text="From booking to pharmacy, Mediqueueless makes patient movement easier to see, plan, and coordinate."
            />
            <div className="flow-map reveal">
              {flowSteps.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="image-break">
          <div className="container image-break-layout reveal">
            <img src="/peoplestanding.png" alt="African hospital patients waiting near registration" />
            <div>
              <p className="section-label">Built for reality</p>
              <h2>Built for hospitals at every stage of digitization.</h2>
              <p>
                Mediqueueless supports existing software, manual workflows, and low-connectivity environments through integration, full deployment, and USSD access.
              </p>
            </div>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="container">
            <SectionIntro
              label="Outcomes"
              title="Better flow creates better experiences for everyone."
            />
            <div className="outcome-grid reveal">
              {outcomes.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="container ai-layout reveal">
            <div>
              <p className="section-label">AI for hospital operations</p>
              <h2>Operational intelligence that turns pressure into planning.</h2>
              <p>
                Forecast demand, identify flow risks, and translate hospital activity into practical decisions for teams on the ground.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="container">
            <SectionIntro
              label="Proof"
              title="Grounded in research, partnerships, and African health ambition."
            />
            <div className="proof-grid reveal">
              {proof.map((item) => <article key={item}>{item}</article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout reveal">
            <div>
              <p className="section-label">Start here</p>
              <h2>See how Mediqueueless can work in your facility.</h2>
              <p>Tell us about your hospital, clinic, or health system. We will help you map the right deployment path.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <img src={logo} alt="Mediqueueless" />
            <p>Redefining the waiting experience through intelligent healthcare operations infrastructure for Africa.</p>
          </div>
          <nav>
            <button onClick={() => scrollTo('platform')}>Platform</button>
            <button onClick={() => scrollTo('video')}>Overview</button>
            <button onClick={() => scrollTo('ai')}>Intelligence</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          <div>
            <h3>Contact</h3>
            <a href="mailto:mediqueueless.ltd@gmail.com">mediqueueless.ltd@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
