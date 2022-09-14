import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/HeroSection/Hero'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data'
import Info from '../Components/InfoSection/Info'
import NavBar from '../Components/NavBar/NavBar'
import Services from '../Components/ContactUs/Contact'
import SideBar from '../Components/SideBar/SideBar'
import About from '../Components/InfoSection/About'
import { aboutObj } from '../Components/InfoSection/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <About {...aboutObj} />
      <Info {...homeObjTwo} />
      <Footer />
    </>
  )
}

export default Pages