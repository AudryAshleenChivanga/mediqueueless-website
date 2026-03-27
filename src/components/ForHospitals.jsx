import React from 'react'

const ForHospitals = () => {
  const models = [
    {
      scenario: 'Your hospital already has digital systems',
      solution: 'Integration',
      icon: 'link',
      benefits: ['Seamless integration', 'No system overhaul', 'Fast deployment']
    },
    {
      scenario: 'Your hospital has no digital tools yet',
      solution: 'Full System Deployment',
      icon: 'building',
      benefits: ['Complete platform', 'Full training provided', 'End-to-end support']
    },
    {
      scenario: 'Patients have limited internet access',
      solution: 'USSD-First Approach',
      icon: 'smartphone',
      benefits: ['Works on basic phones', 'Zero data dependency', 'Universal access']
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      link: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      building: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 21V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12"></path>
          <rect x="4" y="11" width="16" height="2"></rect>
          <rect x="8" y="5" width="2" height="4"></rect>
          <rect x="14" y="5" width="2" height="4"></rect>
        </svg>
      ),
      smartphone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    }
    return icons[iconName] || icons.link
  }

  return (
    <section className="for-hospitals observe" id="for-hospitals">
      <div className="container">
        <h2>Built for hospitals, from the ground up</h2>
        <p className="section-subtitle">
          We understand African hospitals. That&apos;s why we offer flexible solutions that work with your reality.
        </p>

        <div className="hospital-models">
          {models.map((model, index) => (
            <div key={index} className="hospital-model-card observe">
              <div className="model-icon">{getIcon(model.icon)}</div>
              <p className="model-scenario">{model.scenario}</p>
              <h3>{model.solution}</h3>
              <ul className="model-benefits">
                {model.benefits.map((benefit, i) => (
                  <li key={i}>
                    <span className="benefit-dot">+</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hospital-benefits observe">
          <h3>Benefits hospitals receive</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-number">1</div>
              <h4>Better Patient Flow</h4>
              <p>Reduced crowding with intelligent queuing</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">2</div>
              <h4>Operational Visibility</h4>
              <p>Real-time data on wait times and operations</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">3</div>
              <h4>Cost Efficiency</h4>
              <p>Lower operational costs through automation</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">4</div>
              <h4>Patient Satisfaction</h4>
              <p>Better experience, better outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForHospitals
