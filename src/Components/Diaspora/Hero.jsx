import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/styled/Typograpyhy";
import HeroImg from "../../assets/diaspora/heroImg.png";
import { SecondaryButton } from "../../Utils/styled/Buttons";
const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-container">
        <div className="hero-left-container">
          <div className="intro-text">
            <P
              color="#4B4B4B"
              textAlign="left"
              fontSize="1.25rem"
              fontWeight={300}
              lineHeight="normal"
              mobileFontSize=".75rem"
            >
              ENOVERLAB IN CONJUNCTION WITH{" "}
              <span
                style={{
                  color: "#FAA31A",
                }}
              >
                {" "}
                ELITE DIGEST{" "}
              </span>
              PRESENTS
            </P>
          </div>
          <H1
            color="#333333"
            fontSize="2.8125rem"
            mobileFontSize="1.875rem"
            textAlign="left"
            lineHeight="normal"
            mobileLineHeight="normal"
          >
            International Product Management Training Program
          </H1>

          <div className="p-container">
            <P
              color="#4B4B4B"
              textAlign="left"
              fontSize="1.5rem"
              fontWeight={300}
              lineHeight="normal"
              mobileFontSize=".75rem"
            >
              To help Africans in Diaspora with professional backgrounds learn
              global product management tech skills.
            </P>
          </div>
          <div
            onClick={() => {
              window.open("https://forms.gle/CU5EXw9V5P5UL8dK7");
            }}
            className="button-container"
          >
            <SecondaryButton to="#" buttText="Enrol Now" />
          </div>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="heroImg" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  .hero-container {
    padding: 5%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      padding: 6%;
      flex-direction: column;
      align-items: center;
    }
    .hero-left-container {
      width: 55%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .intro-text {
        margin-bottom: 3.0625rem;

        @media screen and (max-width: 768px) {
          margin-bottom: 0.75rem;
        }
      }

      .p-container {
        margin-top: 1.5rem;
        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      .button-container {
        margin-top: 3rem;
        width: 30%;
        @media screen and (max-width: 768px) {
          margin-top: 1.5rem;
          width: 50%;
        }
      }
    }
    .img-container {
      max-width: 35%;
      @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-top: 2rem;
      }
      img {
        width: 100%;
      }
    }
  }
`;
