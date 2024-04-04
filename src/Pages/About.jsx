import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Hero from '../Components/About/Hero'
import AboutContent from '../Components/About/AboutContent'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <StyledAbout>
       <Header bgColor="#FFFDF7"  bgColorMobile="#FFFDF7" />
       <Hero/>
       <AboutContent/>
       <Footer/>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div`
background-color: #FFFDF7;
`