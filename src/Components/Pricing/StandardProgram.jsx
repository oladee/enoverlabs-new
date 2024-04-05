import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Flex } from "../HomeComponents/ProductSection";
import { H2, H4, P } from "../../Utils/styled/Typograpyhy";
import weeks20 from "../../assets/icon/20weeks.png";
import { OnsiteProgram, onlineProgram } from "../../constants";
import check from "../../assets/icon/check.svg";
import { SecondaryButton } from "../../Utils/styled/Buttons";
import { Link } from "react-router-dom";

const StandardProgram = () => {
  return (
    <StyledProgram>
      <header>Standard Programs</header>
      <div className="swipepgContainer">
        <section className="contain">
          <div className="swiperPagination"></div>
        </section>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: ".swiperPagination",
            clickable: true,
            renderBullet: (index, name) => {
              return (
                '<p class="' +
                name +
                '"> <span class="programtext' +
                index +
                '"></span> </p>'
              );
            },
          }}
          autoHeight={true}
        >
          <SwiperSlide>
            <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading">
                  <H4 mdfs="2.3vw" fw="700">
                    Online Training
                  </H4>
                  <img src={weeks20} alt="20 weeks" />
                </div>
                <div className="cover">
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
                          ₦200,000
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
                  {onlineProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.27vw" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
              </div>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading">
                  <H4 mdfs="2.3vw" fw="700">
                    On-site Training
                  </H4>
                  <img src={weeks20} alt="20 weeks" />
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
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledProgram>
  );
};

export default StandardProgram;

const StyledProgram = styled.div`
  padding: 32px 24px 0 24px;
  header {
    color: var(--Title-Text);
    text-align: center;
    font-size: 2.4rem;
    padding-bottom: 4rem;
  }
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
  .cover {
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 2rem 0;
    padding-left: 3.5rem;
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
  .swiperPagination {
    display: flex;
    .swiper-pagination-bullet {
      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;
      padding: 4px 16px;
      color: #4b4b4b;
      width: 140px;
      margin: 0;
      border-radius: 3.103px 3.103px 0px 0px;
      border: 0.388px solid rgba(139, 139, 139, 0.40);
      font-size: 14px;
      text-align: center;
      height: 42px;
      opacity: 100%;
      z-index: 20;
    }
    .swiper-pagination-bullet-active {
      background-color: #010140;
      color: #fff;
    }
    .programtext0::before {
      content: "Online Training";
    }
    .programtext1::before {
      content: "On-Site Training";
    }
  }
  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
    }
  @media (min-width: 1024px) {
    padding: 110px 0px 0 0;
    header {
      padding-bottom: 5.6rem;
      color: #0000ff;
      font-size: 3.2rem;
      font-weight: 700;
    }
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
    .cover {
      width: 100%;
      padding: 7.2rem 0 16rem 0;
      padding-left: 9.6rem;
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
    .swiperPagination{
      width: 100%;
    .swiper-pagination-bullet{
    font-size: 2rem;
    padding: 1rem 2.9rem;
    border-radius: 16px 16px 0px 0px;
    width: 220px;
    height: 75px;
    }
    }

  }
`;
