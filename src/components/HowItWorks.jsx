import React from 'react'

const HowItWorks = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case 'building':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="how-it-works observe" id="how-it-works">
      <div className="container">
        <h2>How it works</h2>
        <p className="section-subtitle">From patient booking to optimized hospital flow</p>
        
        <div className="how-grid">
          <div className="how-section">
            <h3 className="section-with-icon">
              <span className="section-icon">{getIcon('users')}</span>
              For Patients
            </h3>
            <div className="flow-steps">
              <div className="step observe">
                <div className="step-number">1</div>
                <h4>Book</h4>
                <p>Reserve appointment via app, USSD, or phone</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">2</div>
                <h4>Get Time</h4>
                <p>Receive confirmed appointment slot</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">3</div>
                <h4>Arrive Closer</h4>
                <p>Come just before appointment, not hours early</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">4</div>
                <h4>Reduced Waiting</h4>
                <p>See doctor on time, less crowding</p>
              </div>
            </div>
          </div>

          <div className="how-section">
            <h3 className="section-with-icon">
              <span className="section-icon">{getIcon('building')}</span>
              For Hospitals
            </h3>
            <div className="flow-steps">
              <div className="step observe">
                <div className="step-number">1</div>
                <h4>Assess Needs</h4>
                <p>Understand your infrastructure and volume</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">2</div>
                <h4>Choose Model</h4>
                <p>Integration, Full System, or USSD</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">3</div>
                <h4>Deploy</h4>
                <p>Quick, smooth implementation with support</p>
              </div>
              <div className="flow-line"></div>
              <div className="step observe">
                <div className="step-number">4</div>
                <h4>Optimize Flow</h4>
                <p>Real-time analytics and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
