import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import Testimonials from '../Components/HomeComponents/Testimonials'
import Sessions from '../Components/HomeComponents/Sessions'
import Started from '../Components/HomeComponents/Started'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductSession from '../Components/HomeComponents/ProductSession'
import ProductSection from '../Components/HomeComponents/ProductSection'
import EnoverSpecial from '../Components/HomeComponents/EnoverSpecial'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
// import { theme } from '../Utils/Theme'
const Home = () => {
  return (
    <div
    
    >
       <Header/>
        <Hero/>
        <ProductSession/>
        <ProductSection/>
        <EnoverSpecial/>
        <Testimonials/>
        <SuccessStories/>
        <Sessions/>
        <Started/>
        <Footer/>
    </div>
  )
}

export default Home