import React from 'react'
import Hero from "../components/Hero"
import Services from './Services'
import Portfolio from './Portfolio'
import FAQ from './FAQ'
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'

function Home(){
    return(
        <>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <AboutUs />
          <FAQ />

          
        </>
    )
}

export default Home