import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import Market from './market'
import Container from './Components/Container'
import BadgeContainer from './Components/BadgeContainer'
import Testimonials from './Components/Testimonials'
import { Testimonialcontainer } from './Components/Testimonialcontainer'
import Footer from './Components/Footer'
import { ContactUs } from './Components/ContactUs'

const App = () => {
  return (
    <div className='bg-[#fffce5]'>
      
      <Navbar />
      <Hero />
      <Container />
      {/* <BadgeContainer /> */}
      <Testimonialcontainer /> 
      <ContactUs />
      <Footer /> 
    </div>
  )
}

export default App

