import React, { useEffect, useState } from 'react'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Hospital,
  Mail,
  MapPin,
  Menu,
  Network,
  PhoneCall,
  Radio,
  Route,
  ScanLine,
  Send,
  ShieldCheck,
  Stethoscope,
  X
} from 'lucide-react'
import './App.css'

const logo = '/Nobackground_Mediqueueless.png'
const video = '/Health_Tech_Explainer_Video_Creation.mp4'

const journeyStages = [
  {
    number: '01',
    title: 'Schedule',
    icon: CalendarCheck,
    text: 'Patients choose appointment windows aligned to service capacity, visit type, and urgency.'
  },
  {
    number: '02',
    title: 'Prepare',
    icon: ClipboardCheck,
    text: 'The hospital shares requirements, documents, payment steps, and realistic arrival guidance.'
  },
  {
    number: '03',
    title: 'Check in',
    icon: ScanLine,
    text: 'Arrival is confirmed at reception, kiosk, QR, or USSD so the care team sees the patient is onsite.'
  },
  {
    number: '04',
    title: 'Track',
    icon: Radio,
    text: 'Patients see live queue position, expected movement, and the right place to wait.'
  },
  {
    number: '05',
    title: 'Coordinate',
    icon: Network,
    text: 'Departments receive load signals and handoff prompts before bottlenecks become visible.'
  },
  {
    number: '06',
    title: 'Receive care',
    icon: Stethoscope,
    text: 'Patients move into consultation, diagnostics, pharmacy, or follow-up with less uncertainty.'
  }
]

const preparationSignals = [
  {
    icon: FileText,
    title: 'Visit requirements',
    text: 'Insurance, referral, lab history, and payment tasks are surfaced before the patient travels.'
  },
  {
    icon: Bell,
    title: 'Arrival readiness',
    text: 'Reminders adjust to demand, distance, department readiness, and expected registration pressure.'
  },
  {
    icon: ShieldCheck,
    title: 'Low-connectivity access',
    text: 'Digital channels and USSD support patients who cannot depend on smartphones or data.'
  }
]

const queueSignals = [
  ['Queue position', '07', 'Current place in the service line'],
  ['Expected movement', '18 min', 'Forecast until next clinical step'],
  ['Next location', 'Triage', 'Where the patient should move next']
]

const coordinationRows = [
  ['Registration', 'High arrivals', 'Open second desk'],
  ['Triage', 'Stable', 'Keep current pace'],
  ['Consultation', 'Rising load', 'Shift two follow-ups'],
  ['Lab and imaging', 'Ready', 'Send confirmed cases'],
  ['Pharmacy', 'Moderate', 'Prepare common scripts']
]

const intelligenceCards = [
  'Demand forecasting',
  'Patient readiness scoring',
  'Arrival pattern analysis',
  'Department load alerts',
  'Queue movement prediction',
  'Operational reporting'
]

const proof = [
  'Pilot-ready deployment model',
  'Research-backed patient flow design',
  'Deep Learning Indaba recognition',
  'Africa CDC innovation exposure',
  'Silicon Valley Fellowship network',
  'Jim Leech Mastercard Foundation pathway'
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

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav className={`nav-actions ${open ? 'open' : ''}`}>
          <button onClick={() => go('platform')}>Journey</button>
          <button onClick={() => go('video')}>Preparation</button>
          <button onClick={() => go('queue')}>Live Queue</button>
          <button onClick={() => go('ai')}>Coordination</button>
          <button onClick={() => go('proof')}>Proof</button>
          <button className="demo-link" onClick={() => go('contact')}>
            <CalendarCheck size={17} aria-hidden="true" />
            Book a Demo
          </button>
        </nav>
      </div>
    </header>
  )
}

function JourneyConsole() {
  return (
    <div className="journey-console reveal" aria-label="Live patient journey preview">
      <div className="console-header">
        <div>
          <span>Live patient flow</span>
          <strong>Tuesday clinic session</strong>
        </div>
        <span className="live-dot">Live</span>
      </div>

      <div className="console-route" aria-label="Patient journey route">
        {['Booked', 'Ready', 'Checked in', 'In care'].map((item, index) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {index < 3 && <ArrowRight size={16} aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>

      <div className="console-metrics">
        <div>
          <Clock3 size={18} aria-hidden="true" />
          <span>Average wait</span>
          <strong>18 min</strong>
        </div>
        <div>
          <Activity size={18} aria-hidden="true" />
          <span>Prepared patients</span>
          <strong>82%</strong>
        </div>
        <div>
          <Network size={18} aria-hidden="true" />
          <span>Departments synced</span>
          <strong>5 of 6</strong>
        </div>
      </div>
    </div>
  )
}

function SectionIntro({ label, title, text, align = 'center' }) {
  return (
    <div className={`section-intro ${align === 'left' ? 'align-left' : ''} reveal`}>
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
        <CheckCircle2 size={28} aria-hidden="true" />
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
      <button className="primary-button" type="submit">
        <Send size={18} aria-hidden="true" />
        Book a Demo
      </button>
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

    document.querySelectorAll('video[data-autoplay-video]').forEach((videoElement) => {
      videoElement.muted = true
      videoElement.defaultMuted = true
      videoElement.playsInline = true
      const playPromise = videoElement.play()

      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <p className="section-label">Mediqueueless patient-flow system</p>
              <h1>Care should move as one journey, not a series of waiting rooms.</h1>
              <p>
                Mediqueueless coordinates scheduling, preparation, check-in, live queue position,
                department handoffs, and receiving care through one operating layer for hospitals.
              </p>
              <div className="hero-buttons">
                <button className="primary-button" onClick={() => scrollTo('contact')}>
                  <CalendarCheck size={18} aria-hidden="true" />
                  Book a Demo
                </button>
                <button className="secondary-button" onClick={() => scrollTo('platform')}>
                  <Route size={18} aria-hidden="true" />
                  View Journey
                </button>
              </div>
            </div>

            <JourneyConsole />
          </div>
        </section>

        <section className="cinema-section" id="video">
          <div className="container preparation-layout">
            <div className="preparation-media reveal">
              <video
                data-autoplay-video="true"
                src={video}
                autoPlay
                muted
                defaultMuted
                loop
                playsInline
                preload="auto"
                poster="/vision.png"
                aria-label="Mediqueueless healthcare technology overview"
              />
            </div>

            <div className="preparation-copy">
              <SectionIntro
                label="Before arrival"
                title="Preparation starts when the appointment is made."
                text="A queue begins before the patient reaches the hospital. Mediqueueless turns scheduling into the first coordination step, so patients and teams arrive with the same context."
                align="left"
              />
              <div className="signal-list reveal">
                {preparationSignals.map(({ icon: Icon, title, text }) => (
                  <article key={title}>
                    <Icon size={22} aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="container">
            <SectionIntro
              label="Journey model"
              title="Six connected stages, one patient-flow operating view."
              text="Each stage updates the next. When scheduling changes, preparation, arrival pressure, queue movement, and department readiness change with it."
            />
            <div className="journey-grid reveal">
              {journeyStages.map(({ number, title, icon: Icon, text }) => (
                <article key={title}>
                  <div className="stage-top">
                    <span>{number}</span>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="image-break" id="queue">
          <div className="container queue-layout">
            <div className="queue-copy reveal">
              <p className="section-label">Check-in and live queue</p>
              <h2>Patients should know where they stand and where to go next.</h2>
              <p>
                Check-in confirms the patient is onsite. The queue view then converts uncertainty
                into position, timing, and next-location guidance that patients can trust.
              </p>
              <div className="queue-signals">
                {queueSignals.map(([label, value, detail]) => (
                  <article key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="queue-image reveal">
              <img src="/peoplestanding.png" alt="Patients waiting for care in a hospital corridor" />
            </div>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="container">
            <SectionIntro
              label="Department coordination"
              title="Every department sees the same flow pressure."
              text="Registration, triage, consultation rooms, lab, imaging, pharmacy, and follow-up teams can coordinate from shared demand signals instead of reacting late."
            />
            <div className="coordination-board reveal">
              {coordinationRows.map(([department, status, action]) => (
                <article key={department}>
                  <Hospital size={20} aria-hidden="true" />
                  <h3>{department}</h3>
                  <p>{status}</p>
                  <strong>{action}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="container ai-layout">
            <div className="ai-copy reveal">
              <p className="section-label">Systems intelligence</p>
              <h2>Receiving care improves when the whole system can see what is next.</h2>
              <p>
                Mediqueueless uses operational signals to help hospitals anticipate demand,
                prevent department pileups, and move patients toward the right care step sooner.
              </p>
              <div className="ai-actions">
                <button className="secondary-button dark" onClick={() => scrollTo('contact')}>
                  <PhoneCall size={18} aria-hidden="true" />
                  Discuss deployment
                </button>
              </div>
            </div>
            <div className="intelligence-grid reveal">
              {intelligenceCards.map((item) => (
                <span key={item}>
                  <BarChart3 size={19} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="container">
            <SectionIntro
              label="Proof and readiness"
              title="Built for the realities of African healthcare systems."
              text="The platform is shaped around practical deployment, research discipline, low-connectivity access, and the operational demands of high-volume facilities."
            />
            <div className="proof-grid reveal">
              {proof.map((item) => (
                <article key={item}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout reveal">
            <div>
              <p className="section-label">Start here</p>
              <h2>Map Mediqueueless to your patient journey.</h2>
              <p>
                Tell us about your hospital, clinic, or health system. We will help identify the
                right starting point across scheduling, check-in, queues, departments, and care delivery.
              </p>
              <div className="contact-details">
                <a href="mailto:mediqueueless.ltd@gmail.com">
                  <Mail size={18} aria-hidden="true" />
                  mediqueueless.ltd@gmail.com
                </a>
                <span>
                  <MapPin size={18} aria-hidden="true" />
                  Built for African healthcare operations
                </span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <img src={logo} alt="Mediqueueless" />
            <p>Redefining the waiting experience through intelligent healthcare operations infrastructure.</p>
          </div>
          <nav>
            <button onClick={() => scrollTo('platform')}>Journey</button>
            <button onClick={() => scrollTo('video')}>Preparation</button>
            <button onClick={() => scrollTo('queue')}>Live Queue</button>
            <button onClick={() => scrollTo('ai')}>Coordination</button>
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