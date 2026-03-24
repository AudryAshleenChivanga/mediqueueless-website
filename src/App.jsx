import React, { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import FounderStory from './components/FounderStory'
import Achievements from './components/Achievements'
import ForHospitals from './components/ForHospitals'
import ForPatients from './components/ForPatients'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Observe elements for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
    
    document.querySelectorAll('.observe').forEach((el) => {
      observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <FounderStory />
      <Achievements />
      <ForHospitals />
      <ForPatients />
      <Impact />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
