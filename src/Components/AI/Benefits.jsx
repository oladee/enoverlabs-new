import styled from "styled-components"
import { H2 } from "../../Utils/styled/Typograpyhy"

const Benefits = () => {
  return (
    <StyledBenefits>
      <H2 fs="4.205vw" mdfs="3.17vw" mdlh="6rem" color="#333">
      Benefits of <span>Using AI</span> in <br /> Product Manager
      </H2>
      <main>

      </main>
    </StyledBenefits>
  )
}

export default Benefits

const StyledBenefits = styled.div`
    padding: 6.4rem 0;
    h2{
        text-align: center;
        span{
            color: #00f;
        }
    }
    @media (min-width: 1024px) {
        padding: 15rem 0;
    }
`
