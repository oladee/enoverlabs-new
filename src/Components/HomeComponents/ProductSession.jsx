import styled from "styled-components";
import speaker from "../../assets/icon/speaker.png";
import calendar from "../../assets/icon/calender.png";
import clock from "../../assets/icon/time.png";
import meet from "../../assets/icon/google-meet.png";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const ProductSession = () => {
  return (
    <div>
      <Tape>Free Product Session</Tape>
      <MainContent>
        <Content>
          <StyledSpeakerDetails>
            <img src={speaker} alt="Speakers" />
            <div>
              <h2>Guest Speaker:</h2>
              <h3>Adekunle Rosemary</h3>
              <h4>Product Manager</h4>
            </div>
          </StyledSpeakerDetails>
          <DetailsSession>
            <h2>Topic:</h2>
            <h3>
              How to grow your career after completing a product management
              training.
            </h3>
          </DetailsSession>
        </Content>
        <TimeContent>
          <Timing>
            <img src={calendar} alt="calendar" />
            February 24, 2025
          </Timing>
          <Timing>
            <img src={clock} alt="clock" />
            8pm-9pm
          </Timing>
          <Timing>
            <img src={meet} alt="meet" />
            Google Meet
          </Timing>
        </TimeContent>
        <section>
        <SecondaryButton Text="Register"/>
        </section>
      </MainContent>
    </div>
  );
};

export default ProductSession;

export const Tape = styled.div`
  background: #7aa3ff;
  text-align: center;
  padding: 8px 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
  @media (min-width: 1024px) {
    background: #8c8cff;
    font-size: 20px;
  }
`;

export const MainContent = styled.div`
    position: relative;
  background: #000073;
  padding: 2.7rem 1.5rem;
  section{
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    padding: 3.2rem 9.6rem;
    display: flex;
    align-items: center;
  }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0;
  }
`;

const TimeContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0px;
  @media (min-width: 1024px) {
    position: absolute;
    bottom: 15px;
    left: 260px;
  }
`;

export const Timing = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  img {
    width: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const StyledSpeakerDetails = styled.div`
  color: #f7f7f7;
  display: flex;
  gap: 32px;
  font-size: 12px;
  img {
    width: 69px;
  }
  h2 {
    margin-top: 5px;
  }
  h3 {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin: 3px 0px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    img {
      width: 135px;
    }
    h4 {
      font-size: 16px;
    }
  }
`;
export const DetailsSession = styled.div`
  color: #f7f7f7;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 400;
    margin: 5px 0px;
  }
  h3 {
    font-size: 14px;
    width: 90%;
  }
  @media (min-width: 1024px) {
    padding-left: 32px;
    font-size: 20px;
    h3 {
      font-weight: 700;
      line-height: 30px;
      width: 80%;
    }
  }
`;
