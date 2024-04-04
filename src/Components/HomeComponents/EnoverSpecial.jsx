import styled from "styled-components";
import { H1, H2, H3, H4 } from "../../Utils/styled/Typograpyhy";
import lekki from "../../assets/icon/Lekki.png";
import berger from "../../assets/icon/Berger.png";
import ibadan from "../../assets/icon/Ibadan.png";
import { Flex } from "./ProductSection";
import line from "../../assets/icon/Line80.png";
import { TertiaryButton } from "../../Utils/styled/Buttons";
import "../../App.css";
import ScrollToElement from "../../helper/ScrollToElement";
const EnoverSpecial = () => {
  return (
    <Styledspecial>
      <Flex display="block" gap="20px">
        <Flex display="block" mdwidth="29%"   mddisplay="block">
          <H2 lh="3.2rem" mdlh="4.8rem" pb="0.8rem" >
            What makes Enoverlab special?
          </H2>
          <H4 lh="2.2rem" mdlh="3.2rem" pb="5.5rem" >
            7 out of every 10 enoverlab trained PM gets engaged within 3-6
            months after their training.
          </H4>
        </Flex>
        <section className="locale">
          <div>
            <H1 fs="3.6rem" mdfs="4.32vw">
              7+ <span>Locations</span>
            </H1>
            <H4 lh="2.8rem" mdlh="3.2rem" fs="1.6rem" mdwidth="70%">
              Learn virtually from home or visit hubs in your city.
            </H4>
          </div>
          <div>
            <div>
              <img src={lekki} alt="" className="lekki locations" />
            </div>
            <div>
              <img src={ibadan} alt="" className=" ibadan locations" />
            </div>
            <div>
              <img src={berger} alt="" className="berger locations"  />
            </div>
          </div>
        </section>
      </Flex>
      <Flex display="block" mdalign="normal" gap="0.8rem" pt="1rem">
          <Flex  align="normal" mdwidth="50%" mdalign="normal" gap="0.8rem">
            <Firstcard>
              <H3 mdfs="2.116vw" fs="1.8rem">
                Practical classes
              </H3>
              <H4 fs="3.2vw" pt="1.2rem">
                Real-life product projects
              </H4>
            </Firstcard>
            <Secondcard>
              <div>
                <H1 fw="800">7K+</H1>
                <H4 fs="3.2vw" pt="1.2rem">
                  Students trained
                </H4>
              </div>
              <img src={line} alt="" />
              <footer>
                <TertiaryButton to="#alumni" arrowDown="down" handleClick={ScrollToElement} Text="See Alumni" />
              </footer>
            </Secondcard>
          </Flex>
          <Flex pt="10" align="normal" mdwidth="50%" mdalign="normal" gap="0.8rem">
            <Thirdcard>
            <H1>70%</H1>
            <H4 tA="left">Hiring rate</H4>
            </Thirdcard>
            <Fourthcard>
                <H3 mdfs="2.116vw" fs="1.8rem">Internship Placement</H3>
                <TertiaryButton Text="Learn More"/>
            </Fourthcard>
          </Flex>
        </Flex>
    </Styledspecial>
  );
};

export default EnoverSpecial;

const Styledspecial = styled.div`
  background: #000073;
  padding: 7.2rem 2.4rem;
  section {
    border-radius: 12px;
    padding: 0.3rem 2.4rem;
    background: linear-gradient(90deg, #00f 0%, #dbf5ff 99.56%);
    backdrop-filter: blur(60px);
    display: flex;
    align-items: center;
    span {
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
  }
  @media (min-width: 1024px) {
    padding: 10.7rem 9.6rem ;
    section {
        padding: 7.2rem 3.2rem;
        width: calc(100% - 29%);
      span {
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
      }
    }
  }
`;
const Card = styled.div`
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.39) 100%
  );
  backdrop-filter: blur(60px);
`;
const Firstcard = styled(Card)`
    width:18.6rem;
  padding: 11.4rem 4.3rem 6.4rem 2rem;
  @media (min-width: 1024px) {
    padding: 14.1rem 0rem 5.8rem 2.4rem;
    width:60%;
  }
`;
const Secondcard = styled(Card)`
    width:18.6rem;
  div {
    padding: 4rem 0rem 7.5rem 1.6rem;
  }
  img {
    display: block;
    width: 100%;
  }
  footer {
    padding-top: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-bottom: 1.7rem; */
  }
  @media (min-width: 1024px) {
    div {
      padding: 1.8rem 5.7rem 6.1rem 2.4rem;
    }
    width:40%;
  }
`;
const Thirdcard = styled(Card)`
  padding: 12.9rem 0rem 7.2rem 2.4rem;
  width:18.6rem;
  @media (min-width: 1024px) {
    width:40%;
    padding: 10.5rem 3.2rem 5.8rem 5.8rem;
  }
`;
const Fourthcard = styled(Card)`
  padding: 12.8rem 0rem 3rem 2.1rem;
  width:18.6rem;
  @media (min-width: 1024px) {
    padding: 14.1rem 5.1rem 2.4rem 2.4rem;
    width:60%;
  }
`;
