import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";
const CertiMarquee = () => {
  return (
    <StyledCerti>
    <Marquee>
        <h5 className="cert-text">
     Enoverlab is accredited by the American Council of Training and Development (ACTD)
        </h5>
    </Marquee>
    </StyledCerti>
  )
}

export default CertiMarquee

const StyledCerti = styled.div`
    padding: 1rem 0;
    margin: 3rem 0; 
    background-color:  #0046FF;
    @media (max-width: 768px){
        margin: 0.2rem 0 3rem 0;
    }
    .cert-text{
        color: #FFF;
        font-size: 25px;
        font-weight: 500;
        margin-left: 2rem;
        @media (max-width: 768px) {
            font-size: 14px;
      }
    }
`