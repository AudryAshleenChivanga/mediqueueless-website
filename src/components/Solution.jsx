import React from 'react'

const Solution = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'link':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        )
      case 'building':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      case 'phone':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </svg>
        )
      case 'arrow':
        return (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  const solutions = [
    {
      title: 'Integration',
      subtitle: 'Existing hospital systems',
      description: 'We integrate into your current systems without disruption',
      icon: 'link',
      details: ['Connect with existing software', 'Minimal setup required', 'Seamless data flow']
    },
    {
      title: 'Full System',
      subtitle: 'Complete digital platform',
      description: 'We provide an end-to-end digital solution for hospitals',
      icon: 'building',
      details: ['Complete platform', 'From scratch deployment', 'Full training & support']
    },
    {
      title: 'USSD Access',
      subtitle: 'Low connectivity support',
      description: 'Patients book appointments via USSD on any basic phone',
      icon: 'phone',
      details: ['Works offline', 'No internet required', 'Reaches everyone']
    }
  ]

  return (
    <section className="solution observe" id="solution">
      <div className="container">
        <h2>A solution tailored to every hospital</h2>
        <p className="section-subtitle">
          Mediqueueless doesn't offer one-size-fits-all solutions. We assess your hospital's infrastructure, patient volume, and needs, then deploy the right model.
        </p>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card observe">
              <div className="solution-icon">{getIcon(solution.icon)}</div>
              <h3>{solution.title}</h3>
              <p className="solution-subtitle-text">{solution.subtitle}</p>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-details">
                {solution.details.map((detail, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="deployment-flow observe">
          <h3>How we choose the right solution</h3>
          <div className="flow-diagram">
            <div className="flow-item">
              <div className="flow-step">1</div>
              <p><strong>Assess</strong><br/>Infrastructure, volume, connectivity</p>
            </div>
            <div className="flow-arrow">{getIcon('arrow')}</div>
            <div className="flow-item">
              <div className="flow-step">2</div>
              <p><strong>Recommend</strong><br/>Integration, Full, or USSD</p>
            </div>
            <div className="flow-arrow">{getIcon('arrow')}</div>
            <div className="flow-item">
              <div className="flow-step">3</div>
              <p><strong>Deploy</strong><br/>Fast, reliable implementation</p>
            </div>
            <div className="flow-arrow">{getIcon('arrow')}</div>
            <div className="flow-item">
              <div className="flow-step">4</div>
              <p><strong>Optimize</strong><br/>Continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
