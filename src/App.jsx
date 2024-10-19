import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Features from './components/features.jsx'
import Footer from './components/Footer.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Workflow from './components/Workflow.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-6 pt-20 mx-auto">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>

    </>
  )
}

export default App
