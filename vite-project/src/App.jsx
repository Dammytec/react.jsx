import React from 'react'


import Home from './assets/components/home'
import About from './assets/components/about'
import Contact from './assets/components/contact'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './assets/shared-component/header'
import Footer from './assets/shared-component/footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App 

