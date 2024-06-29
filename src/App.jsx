import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Myservices/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App