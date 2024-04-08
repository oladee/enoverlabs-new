import { Flex } from '../HomeComponents/ProductSection'
import { H2, H4, P } from '../../Utils/styled/Typograpyhy'
import { SecondaryButton } from '../../Utils/styled/Buttons'
import { Link } from 'react-router-dom'
import { OnsiteProgram } from '../../constants'
import styled from 'styled-components';
import check from "../../assets/icon/check.svg"

const ProgramDetails = () => {
  return (
    <StyledProgramDetail>
    <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading" id="onsite">
                  <H4 mdfs="2.3vw" fw="700">
                    On-site Training
                  </H4>
                  <img src="" alt="12 weeks" />
                </div>
                <div className="cover2">
                  <main>
                    <div className="item">
                      <div>
                        <H4 mdfs="1.058vw" fs="2.8vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.27vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Every Saturday
                        </H2>
                      </div>
                      <div>
                        <H4 mdfs="1.058vw" fs="2.8vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.27vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          12 weeks training
                        </H2>
                        <H2
                          mdfs="1.45vw"
                          fs="3.27vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          {" "}
                          8 weeks internship
                        </H2>
                      </div>
                    </div>
                    <div className="item item2">
                      <div>
                        <H4 mdfs="1.058vw" fs="2.8vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2
                          mdfs="1.58vw"
                          fs="3.27vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          10am - 1pm
                        </H2>
                      </div>
                      <div>
                        <H4 mdfs="1.058vw" fs="2.8vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="3.27vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          ₦300,000
                        </H2>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                    <SecondaryButton Text="Enroll Now" />
                    <Link to="#" className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </div>
              </div>
              <div className="breakdown">
                <H4
                  mdfs="1.58vw"
                  fw="700"
                  pt="25px"
                  pb="25px"
                  mdpb="28px"
                  color="var(--Body-Text)"
                >
                  Training Details
                </H4>
                <div className="list">
                  {OnsiteProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.27vw" mdfs="1.23vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
              </div>
            </Flex>
      
    </StyledProgramDetail>
  )
}

export default ProgramDetails

const StyledProgramDetail = styled.div`
    padding: 33px 15px 3.2rem 15px;
  .program {
    position: relative;
    width: 100%;
    img {
      width: 14rem;
      position: absolute;
      right: -5px;
    }
  }
  .heading {
    padding: 2.5rem 0;
    background: #0000ff;
    padding-left: 3.5rem;
    display: flex;
    align-items: center;
  }
  .cover2{
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 2rem 0;
    padding-left: 3.5rem;
  }
  main {
    display: flex;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .item2 {
    padding-left: 26.86vw;
  }
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    .syll {
      display: none;
    }
  }
  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
    }
  @media (min-width: 1024px) {
    padding: 6.8rem 4.4rem;
    .program {
      position: relative;
      width: 62.79vw;
      img {
        position: absolute;
        right: -13px;
      }
    }
    .breakdown{
      width: calc(100vw - 62.79vw);
    }
    .heading {
      padding: 4rem 0;
      padding-left: 9.6rem;
      display: flex;
      align-items: center;
      gap: 14.48vw;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .cover2 {
      width: 100%;
      padding: 7.2rem 0 7rem 0;
      padding-left: 9.6rem;
    }
    .item {
      gap: 7.2rem;
    }
    .item2 {
      padding-left: 15.01vw;
    }
    .cta {
      padding-top: 6.1rem;
      justify-content: flex-start;
      .syll {
        display: block;
        padding-left: 17.01vw;
        color: #175afe;
        font-size: 20px;
      }
    }

  }
`