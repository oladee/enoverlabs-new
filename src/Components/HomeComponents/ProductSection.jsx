import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import "../../App.css";
import longArrow from "../../assets/icon/longArrow.png";
import { H2, H3, H4, P } from "../../Utils/styled/Typograpyhy";
import lineline from "../../assets/icon/lineLine.png";
import {
  standardPrograms,
  advancedPrograms,
  internationalPrograms,
} from "../../constants";
import pathline from "../../assets/icon/pathLine.png";

const ProductSection = () => {
  return (
    <StyledProductSection>
      <header>
        <H2
          color="var(--Title-Text)"
          pb="6.4rem"
          pdmb="7.2rem"
          mdlh="48px"
          lh="32px"
          mdw="50%"
          tA="center"
        >
          Personalized Programs to Boost Your Career Success
        </H2>
      </header>

      <Flex display="block" mdalign="start">
        <section className="hides">
          <section className="hide"></section>
          <img src={pathline} alt="" className="dk" />
        </section>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: ".hide",
            clickable: true,
            renderBullet: (index, name) => {
              return (
                '<p class="' +
                name +
                '"> <span class="pagetext' +
                index +
                '"></span> </p>'
              );
            },
          }}
          autoHeight={true}
          autoplay={{
            delay: 5000,
          }}
          className="swipe"
        >
          <SwiperSlide className="sp">
            <H3 color="#333" fs="1.8rem" pt="4.8rem" mdfs="2.8rem">
              Standard Programs
            </H3>
            <Flex wrap="wrap" gap="15px">
              {standardPrograms.map((programs) => (
                <Card
                  img={programs.img}
                  headText={programs.headText}
                  subText={programs.subText}
                />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide className="ad">
            <H3 color="#333" fs="1.8rem" pt="4.8rem" mdfs="2.8rem">
              Advanced Programs
            </H3>
            <Flex wrap="wrap" gap="15px">
              {advancedPrograms.map((programs) => (
                <Card
                  img={programs.img}
                  headText={programs.headText}
                  subText={programs.subText}
                />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide className="ip">
            <H3 color="#333" fs="1.8rem" pt="4.8rem" mdfs="2.8rem">
              International Programs
            </H3>
            <Flex wrap="wrap" gap="15px">
              {internationalPrograms.map((programs) => (
                <Card
                  img={programs.img}
                  headText={programs.headText}
                  subText={programs.subText}
                />
              ))}
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </StyledProductSection>
  );
};

export default ProductSection;

export const Card = ({ img, headText, subText }) => {
  return (
    <StyledCard>
      <img src={img} alt="subText" className="cardImg" />
      <section>
        <div>
          <H4>{headText}</H4>
          <P color="#F7F7F7" pb="1.8rem">
            {subText}
          </P>
        </div>
        <Flex gap="4px" justify="none" mdjustify="end">
          <H4 fs="1.6rem">Learn more</H4>
          <img src={longArrow} alt="" />
        </Flex>
      </section>
    </StyledCard>
  );
};

const StyledProductSection = styled.div`
  background: url(${lineline});
  background-repeat: no-repeat;
  background-size: 20%;
  padding: 10.7rem 2.4rem;
  color: var(--Title-Text) header {
    display: flex;
    justify-content: center;
    padding-bottom: 6.4rem;
  }
  @media (min-width: 1024px) {
    padding: 12.1rem 9.6rem;
    background-size: 15%;
    header {
      display: flex;
      justify-content: center;
      padding-bottom: 6.4rem;
    }
  }
`;
const StyledCard = styled.div`
  width: fit-content;
  position: relative;
  section {
    position: absolute;
    bottom: 0;
    background: rgba(24, 24, 24, 0.55);
    backdrop-filter: blur(6px);
    border-radius: 0px 0px 20px 20px;
    width: 100%;
    padding: 16px 16px 12px 16px;
  }
  img {
    border-radius: 20px;
  }
  @media (min-width: 1024px) {
    section {
      padding: 20px 16px;
    }
  }
`;

export const Flex = styled.div`
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || "center"};
  width: ${(props) => props.width || "100%"};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  justify-content: ${(props) => props.justify};
  @media (min-width: 1024px) {
    display: ${(props) => props.mddisplay || "flex"};
    gap: ${(props) => props.mdgap};
    justify-content: ${(props) => props.mdjustify};
    align-items: ${(props) => props.mdalign || "center"};
    width: ${(props) => props.mdwidth};
    flex-wrap: ${(props) => props.mdwrap};
    padding-top: ${(props) => props.mdpt};
    padding-bottom: ${(props) => props.mdpb};
    padding-right: ${(props) => props.mdpr};
    padding-left: ${(props) => props.mdpl};
  }
`;
