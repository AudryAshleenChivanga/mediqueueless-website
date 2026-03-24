import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Mediqueueless</h4>
            <p>Redesigning patient flow systems in African healthcare.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#solution">Solutions</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.linkedin.com/company/mediqueueless/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mediqueueless. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
