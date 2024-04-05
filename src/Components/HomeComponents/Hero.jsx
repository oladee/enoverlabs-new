import {  SecondaryButton } from '../../Utils/styled/Buttons'
import { StyledHeroBody, StyledHeroFooter, StyledHeroHeader } from '../../Utils/styled/hero/hero.styled'
import ACTD from '../../assets/icon/ACTD.png'
import deskheroImage1 from "../../assets/icon/deskHeroImg.png"
import mobHeroImg from "../../assets/icon/mobHeroImg.png"
import line from "../../assets/icon/Line 76.svg";

const Hero = () => {
  let src = `${mobHeroImg} 300w, ${deskheroImage1} 1512w,  `
  let sizes = `(min-width: 1024px) 1024px, 300px`
  return (<div>
    <StyledHeroHeader>
      <h1>Empowering You To Be An <span>EXCEPTIONAL</span> Product Manager</h1>
      <SecondaryButton Text='Explore Our Programs'/>
    </StyledHeroHeader>
    <StyledHeroBody>
    <img src={mobHeroImg} alt="Enoverlab Hero" 
    srcSet={src} sizes={sizes} className='heroImg'
     />
    <div className='text'>
      <h2>7K+ <span>Students</span></h2>
      <img src={line} alt="" />
      <h2>7+ <span>Locations</span></h2>
    </div>
    </StyledHeroBody>
    <StyledHeroFooter>
      <section>
        <p>Regardless of your background, you can become a skilled product manager in the next 6 months.</p>
        <SecondaryButton Text="Explore Our Programs"/>
      </section>
      <div>
        <img src={ACTD} alt="Acrd" />
      <p>Accredited by American  Council of Training and Development (ACTD)</p>
      </div>
    </StyledHeroFooter>
  </div>)
}

export default Hero

