import React from 'react'

const Impact = () => {
  const stats = [
    {
      number: '50%',
      label: 'Reduction in waiting times',
      icon: 'timer'
    },
    {
      number: '3x',
      label: 'Increase in patient flow efficiency',
      icon: 'activity'
    },
    {
      number: '100%',
      label: 'Accessibility across all phone types',
      icon: 'smartphone'
    },
    {
      number: '∞',
      label: 'Scalability - from clinic to hospital',
      icon: 'expand'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      timer: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="13" r="8"></circle>
          <path d="M12 9v4l3 2"></path>
          <path d="M7 4h10"></path>
        </svg>
      ),
      activity: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      smartphone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      expand: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      )
    }
    return icons[iconName] || icons.timer
  }

  return (
    <section className="impact observe" id="impact">
      <div className="container">
        <h2>Our impact</h2>
        <p className="section-subtitle">
          Transforming healthcare systems across Africa
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card observe">
              <div className="stat-icon">{getIcon(stat.icon)}</div>
              <div className="stat-number">{stat.number}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="impact-message observe">
          <h3>Why this matters</h3>
          <div className="impact-points">
            <div className="impact-point">
              <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h4>Tailored solutions</h4>
                <p>One size doesn't fit all in African healthcare</p>
              </div>
            </div>
            <div className="impact-point">
              <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h4>Works across infrastructure levels</h4>
                <p>From digital hospitals to rural clinics</p>
              </div>
            </div>
            <div className="impact-point">
              <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h4>Improves efficiency and experience</h4>
                <p>Better for hospitals, better for patients</p>
              </div>
            </div>
            <div className="impact-point">
              <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h4>Built for African healthcare realities</h4>
                <p>We understand the context and constraints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
