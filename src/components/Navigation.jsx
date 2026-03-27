import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="/high-resolution-logo-grayscale.png"
            alt="Mediqueueless Logo"
            className="logo-img"
            loading="eager"
          />
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('solution')} className="nav-link">Solutions</a></li>
          <li><a onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</a></li>
          <li><a onClick={() => scrollToSection('achievements')} className="nav-link">Achievements</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
          <li>
            <button className="nav-button" onClick={() => scrollToSection('contact')}>
              Get Demo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
