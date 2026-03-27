import React from 'react'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero observe" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-kicker">Patient flow, redesigned for Africa</div>

          <h1 className="hero-title">
            Better patient flow for modern hospitals
          </h1>

          <p className="hero-subtitle">
            Mediqueueless helps hospitals reduce crowding and long wait times through appointment booking and queue management systems designed for real African healthcare environments.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
              aria-label="Book a demo with Mediqueueless"
            >
              Book a Demo
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('solution')}
              aria-label="Learn how Mediqueueless works"
            >
              Explore the System
            </button>
          </div>

          <p className="hero-trust-line">
            Built for existing hospital systems, full deployments, and low-connectivity environments.
          </p>
        </div>

        <div className="hero-video-container">
          <div className="hero-video-wrapper">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/Health_Tech_Explainer_Video_Creation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-video-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
