import React from 'react'
import Navbar from './common/Navbar'
import Hero from './components/Hero'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
