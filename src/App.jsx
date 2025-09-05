import React from 'react'
import Navbar from './common/Navbar'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import ServicesDetails from './components/ServicesDetails'
import Portfolio from './components/Portfolio'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './common/Footer'
import QetQoute from './components/GetQoute'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
     
      
     
        <Route index element={<Home />} /> 
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:id' element={<ServicesDetails />}/>
         <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/contact" element={<QetQoute />}/>

        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
