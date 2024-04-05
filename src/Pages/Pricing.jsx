import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/Pricing/PriceHero'
import Header from '../Components/Header'
import Testimonies from '../Components/Pricing/Testimonies'
// import SuccessStories from '../Components/Pricing/SuccessStories'
import Footer from '../Components/Footer'
import StandardProgram from '../Components/Pricing/StandardProgram'
import { ClassTools } from '../Components/Pricing/ClassTools'
import Explore from '../Components/Pricing/Explore'
import { FaqSection } from '../Components/Pricing/FaqSection'
const Pricing = () => {
  return (<div>
    <Header/>
    <StyledPricing>
        <PriceHero/>
        <StandardProgram/>
        <ClassTools/>
        <Explore/>
        <Testimonies/>
        <FaqSection/>
    </StyledPricing>
    <Footer p="5rem 9.6rem"/>
  </div>)
}

export default Pricing

const StyledPricing = styled.div`
  background: #FFFDF7;
    @media (min-width: 1024px) {
      padding: 0 9.6rem;
    }
`