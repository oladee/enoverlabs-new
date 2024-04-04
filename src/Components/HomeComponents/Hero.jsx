import {  SecondaryButton } from '../../Utils/styled/Buttons'
import { StyledHeroFooter, StyledHeroHeader } from '../../Utils/styled/hero/hero.styled'
import ACTD from '../../assets/icon/ACTD.png'
import heroImage from "../../assets/Hero section image.jpg"

const Hero = () => {
  return (<div>
    <StyledHeroHeader>
      <h1>Empowering You To Be An <span>EXCEPTIONAL</span> Product Manager</h1>
      <SecondaryButton Text='Explore Our Programs'/>
    </StyledHeroHeader>
    <img src={heroImage} alt="Enoverlab Hero" />
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

