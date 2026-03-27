import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    hospitalType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formElement = e.target
    const submitData = new FormData(formElement)

    fetch('https://formsubmit.co/mediqueueless.ltd@gmail.com', {
      method: 'POST',
      body: submitData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true)
          setTimeout(() => {
            setSubmitted(false)
            setFormData({
              name: '',
              email: '',
              organization: '',
              hospitalType: '',
              message: ''
            })
            formElement.reset()
          }, 3000)
        }
      })
      .catch((error) => console.error('Error:', error))
  }

  return (
    <section className="contact observe" id="contact">
      <div className="container">
        <h2>Ready to transform your hospital?</h2>
        <p className="section-subtitle">
          Let&apos;s discuss how Mediqueueless can work for your hospital
        </p>

        <div className="contact-content">
          <div className="contact-form-container observe">
            {submitted ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>We&apos;ll be in touch soon to discuss your hospital&apos;s needs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Hospital / Organization *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hospitalType">Hospital Type *</label>
                  <select
                    id="hospitalType"
                    name="hospitalType"
                    value={formData.hospitalType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select hospital type</option>
                    <option value="government">Government Hospital</option>
                    <option value="private">Private Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="health-center">Health Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hospital's needs and challenges"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Request a Demo
                </button>
              </form>
            )}
          </div>

          <div className="contact-info observe">
            <div className="info-block">
              <h3>Get in touch</h3>
              <p>
                Whether you&apos;re interested in learning more about our solutions or ready to deploy, we&apos;re here to help.
              </p>
            </div>

            <div className="info-block">
              <h4>Why book a demo?</h4>
              <ul>
                <li>Understand your hospital&apos;s unique needs</li>
                <li>See which solution is right for you</li>
                <li>Get a timeline and pricing information</li>
                <li>Discuss integration and support options</li>
              </ul>
            </div>

            <div className="info-block">
              <h4>Response time</h4>
              <p>We typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
