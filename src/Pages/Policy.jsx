import React from 'react'
import TermsLayout from '../Components/Terms/TermsLayout'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
const Policy = () => {
  return (
    <div>
          <Header bgColor="rgba(0, 0, 255, 0.04)" bgColorMobile="#F5FCFF" headerPosition={'relative'} />
        <TermsLayout/>
        <Footer/>
    </div>
  )
}

export default Policy