import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero observe" id="hero">
      <div className="hero-container">
        {/* LEFT SIDE: Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Redefining the waiting experience in African healthcare
          </h1>
          
          <p className="hero-subtitle">
            Mediqueueless helps hospitals reduce waiting times through appointment booking and queue management solutions tailored to their operational needs.
          </p>
          
          {/* CTA Buttons */}
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
              See How It Works
            </button>
          </div>

          {/* Trust line */}
          <p className="hero-trust-line">
            Tailored for hospitals with existing systems, full deployments, and low connectivity environments.
          </p>
        </div>

        {/* RIGHT SIDE: Video Showcase */}
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
