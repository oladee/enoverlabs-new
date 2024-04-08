import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";
const Aiprogram = () => {
  return (
    <StyledAiprogram>
      <div className="cta">
        <H4 color="#1A1A1A">
          Train with Certified product managers and optimise Poduct Management
          skills within 3 months!
        </H4>
        <SecondaryButton Text="Enroll Now" />
      </div>
    </StyledAiprogram>
  );
};

export default Aiprogram;

const StyledAiprogram = styled.div`
  background: url(${ailine});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 20%;
  padding: 4rem 1.6rem;
  .cta {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media (min-width: 1024px) {
    padding: 4rem 9.6rem 6.8rem 9.6rem;
    .cta {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      h4{
        width: 50%;
      }
    }
  }
`;
