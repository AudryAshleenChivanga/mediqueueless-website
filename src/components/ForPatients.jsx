import React from 'react'

const ForPatients = () => {
  const getIcon = (iconName) => {
    const icons = {
      timer: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="13" r="8"></circle>
          <path d="M12 9v4l3 2"></path>
          <path d="M7 4h10"></path>
        </svg>
      ),
      control: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="12" r="3"></circle>
          <path d="M9 12h6"></path>
        </svg>
      ),
      smartphone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      globe: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      arrow: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      )
    }
    return icons[iconName] || icons.timer
  }

  return (
    <section className="for-patients observe" id="for-patients">
      <div className="container">
        <h2>Designed for patients</h2>
        <p className="section-subtitle">
          Simple, accessible, and centered on your needs
        </p>

        <div className="patient-benefits-grid">
          <div className="patient-benefit observe">
            <div className="benefit-icon">{getIcon('timer')}</div>
            <h3>Less Waiting</h3>
            <p>Book your time, come prepared, skip the lines</p>
          </div>

          <div className="patient-benefit observe">
            <div className="benefit-icon">{getIcon('control')}</div>
            <h3>More Control</h3>
            <p>Manage appointments on your own schedule</p>
          </div>

          <div className="patient-benefit observe">
            <div className="benefit-icon">{getIcon('smartphone')}</div>
            <h3>Multiple Access</h3>
            <p>App, USSD, or phone, whatever works best for you</p>
          </div>

          <div className="patient-benefit observe">
            <div className="benefit-icon">{getIcon('globe')}</div>
            <h3>Accessible Everywhere</h3>
            <p>Works on any phone, in any network condition</p>
          </div>
        </div>

        <div className="patient-story observe">
          <h3>A patient&apos;s experience</h3>
          <div className="story-timeline">
            <div className="story-point">
              <div className="story-marker">Mon</div>
              <p><strong>Receives reminder:</strong> "Book your appointment"</p>
            </div>
            <div className="story-arrow">{getIcon('arrow')}</div>
            <div className="story-point">
              <div className="story-marker">Tue</div>
              <p><strong>Books via USSD:</strong> "Wednesday 10 AM"</p>
            </div>
            <div className="story-arrow">{getIcon('arrow')}</div>
            <div className="story-point">
              <div className="story-marker">Wed</div>
              <p><strong>Arrives 15 mins early:</strong> No waiting room chaos</p>
            </div>
            <div className="story-arrow">{getIcon('arrow')}</div>
            <div className="story-point">
              <div className="story-marker">Wed</div>
              <p><strong>Sees doctor on time:</strong> Appointment runs smoothly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForPatients
