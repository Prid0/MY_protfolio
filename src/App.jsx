import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Work from './component/Work'
import Projects from './component/Projects'
import Contect from './component/Contect'
import Footer from './component/Footer'
import Testimonial from './component/Testimonial'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='project'>
        <Projects />
        <Testimonial />
      </section>
      <section id='contect'>
        <Contect />
        <Footer />
      </section>
    </>
  )
}

export default App
