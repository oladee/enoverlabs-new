import React from 'react'
import { H1, H3, H4 } from '../../Utils/styled/Typograpyhy'
import { SecondaryButton } from '../../Utils/styled/Buttons'
import kenyanFlag from "../../assets/icon/kenyaFlag.png"
import kenyaCity from "../../assets/icon/kenyaCity.png"
import styled from 'styled-components'
import location from "../../assets/icon/location.svg"

const KenyanHero = () => {
  return (
    <StyledKenyanHero>
        <section className='leftContainer'>
            <div className='topTool'>
                <H4>Hujambo Kenya</H4>
                <img src={kenyanFlag} alt="Kenya's FLag" />
            </div>
            <H1 mdfs="clamp(4.5rem,3.703vw,5.8rem)">Learn Product Management onsite in Nairobi, Kenya</H1>
            <H3 mdfs="clamp(1.6rem,1.322vw,2rem)">Enjoy the richer, deeper experiences that comes with learning in-person at our incredible Nairobi centre</H3>
            <SecondaryButton Text="Enroll Now"/>
        </section>
        <section className='rightContainer'>
            <div>
            <img src={kenyaCity} alt=""  className='kenyaCity'/>
            <div className='locale'>
                <img src={location} alt="kenya City " />
                <H4>Nairobi, Kenya</H4>
            </div>
            </div>
        </section>
      
    </StyledKenyanHero>
  )
}

export default KenyanHero

const StyledKenyanHero = styled.div`
padding: 1.9rem 2.4rem;
display: flex;
flex-direction: column;
gap: 6rem;
h1{
    color: var(--Title-Text);
    margin-top: 3rem;
    margin-bottom: 1.6rem;
}
h3{
    font-weight:400;
    margin-bottom: 4rem;
    color: var(--Body-Text);
}
h4{
    font-size: 1.4rem;
}
.topTool{
    display: flex;
    align-items: center;
    padding: 0.6rem 0.8rem;
    width: fit-content;
    gap: 0.5rem;
    border-radius: 16px;
    background: rgba(0, 78, 255, 0.44);
    img{
        mix-blend-mode: inherit;
        /* background-blend-mode: lighten; */
    }
}
.rightContainer{
    width: fit-content;
    position: relative;
}
.kenyaCity{
    box-shadow: 15px -15px 0px 0px rgba(0,70,255,0.18);
}
.locale{
    position: absolute;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.32);
    backdrop-filter: blur(8px);
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 2.8rem;
}
@media (min-width: 1024px) {
    padding: 6.4rem 9.6rem;
    flex-direction: row;
    justify-content: space-between;
    h1{
    margin-top: 4rem;
    }
    .topTool{
        padding: 1.2rem 1.8rem;
        border-radius: 24px;
    }
    .leftContainer{
        padding-top: 1.6rem;
        width: 43%;
    }
    .kenyaCity{
        max-width: 30.06vw;
        box-shadow: 15px -15px 0px 0px rgba(0,70,255,0.18);
    }
    .locale{
        padding: 1.2rem 2.8rem;
    }
}
`
