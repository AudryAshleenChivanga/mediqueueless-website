import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Jim Leech Mastercard Foundation Fellowship',
      description: 'Successfully completed a full incubation program focused on building and scaling impactful ventures.',
      icon: 'award'
    },
    {
      title: 'Africa Impact Challenge',
      description: 'Advanced past the second stage, demonstrating strong potential for scalable impact across the continent.',
      icon: 'star'
    },
    {
      title: 'Africa CDC Cohort',
      description: 'Selected as part of a cohort focused on strengthening health systems across Africa.',
      icon: 'heart'
    },
    {
      title: 'Silicon Valley Fellowship 2025',
      description: 'Founder selected to learn from leading global technology companies.',
      icon: 'rocket'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      award: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8 14 12 17 16 14"></polyline>
          <line x1="12" y1="17" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      star: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.52 19.64 24.78 12 18.52 4.36 24.78 6.45 16.52 0 10.26 8.91 10.26"></polygon>
        </svg>
      ),
      heart: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      rocket: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5-1.5-2-5-2-5s3.5-.5 5-2"></path>
          <path d="M12 8V4m0 16v-4m0-4V4"></path>
          <path d="M8 12h8"></path>
          <circle cx="12" cy="8" r="4"></circle>
          <path d="M16 18c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2"></path>
        </svg>
      )
    }
    return icons[iconName] || icons.award
  }

  return (
    <section className="achievements observe" id="achievements">
      <div className="container">
        <h2>Achievements so far</h2>
        <p className="section-subtitle">
          Mediqueueless has been recognized by leading innovation and health ecosystems
        </p>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card observe">
              <div className="achievement-icon">{getIcon(achievement.icon)}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
