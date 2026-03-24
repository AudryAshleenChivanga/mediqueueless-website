import React from 'react'

const FounderStory = () => {
  return (
    <section className="founder-story observe">
      <div className="container">
        <h2>Built from lived experience</h2>
        
        <div className="founder-content">
          <div className="founder-text observe">
            <p>
              Mediqueueless was founded after witnessing the challenges of long hospital waiting times while caring for a diabetic grandmother.
            </p>
            <p>
              This experience revealed that the issue was not just queues, but how healthcare systems manage patient flow.
            </p>
            <p>
              <strong>The solution was to rethink the system, not just the line.</strong>
            </p>
            <p>
              Today, we're building the future of African healthcare by giving hospitals the tools they need to serve patients better.
            </p>
          </div>
          
          <div className="founder-video observe">
            <div className="video-wrapper">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/h7fH6QfGbjk?si=PqaKE3K3TUL8mHdn" 
                title="Mediqueueless Founder Story"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderStory
