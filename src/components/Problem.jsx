import React from 'react'

const Problem = () => {
  const problems = [
    {
      title: 'Overcrowding',
      description: 'Patient volumes exceed facility capacity, creating bottlenecks',
      icon: 'users'
    },
    {
      title: 'Unpredictable Flow',
      description: 'Manual scheduling leads to inefficient patient distribution',
      icon: 'trending-up'
    },
    {
      title: 'Manual Systems',
      description: 'Paper-based processes slow down operations and increase errors',
      icon: 'clipboard'
    },
    {
      title: 'Low Connectivity',
      description: 'Rural and remote hospitals lack reliable internet infrastructure',
      icon: 'wifi-off'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      users: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      'trending-up': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      clipboard: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <line x1="9" y1="14" x2="15" y2="14"></line>
          <line x1="9" y1="10" x2="15" y2="10"></line>
        </svg>
      ),
      'wifi-off': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M16.84 12.22c.64-.64 1.28-1.36 1.84-2.12.89-1.25 1.78-2.7 2.32-4.3"></path>
          <path d="M2 8.82a15.3 15.3 0 0 1 4.07-2.5"></path>
          <path d="M12 16c1.1 0 2-1.12 2-2.5"></path>
          <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
        </svg>
      )
    }
    return icons[iconName] || icons.users
  }

  return (
    <section className="problem observe" id="problem">
      <div className="container">
        <h2>Waiting time is a system problem</h2>
        <p className="section-subtitle">
          Long waiting times in African hospitals aren't just inconvenient—they're a symptom of deeper system challenges
        </p>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card observe">
              <div className="problem-icon">{getIcon(problem.icon)}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
