import styled from "styled-components";

export const StyledHeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 72px 32px 32px 32px;
  h1 {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    color: var(--Title-Text);
  }
  span {
    color: #fff;
    background: #8c8cff;
    border-radius: 10px;
  }
  button {
    margin: 32px 0px;
  }

  @media (min-width: 1024px) {
    display: block;
    text-align: left;
    padding: 64px 0px 40px 96px;
    h1 {
      font-size: 6.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 86px; /* 134.375% */
      letter-spacing: 3.2px;
    }
    button {
      display: none;
    }
  }
`;

export const StyledHeroFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--Body-Text);
  font-weight: 400;
  line-height: 30px;
  padding: 7.2rem 1.5rem 3.2rem 1.5rem;
  section {
    display: none;
    p {
      font-size: 2rem;
      font-style: normal;
      width: 58%;
    }
  }
  div {
    display: flex;
    align-items:center ;
    gap: 12px;
    p {
      font-size: 1.4rem;
      font-style: normal;
    }
  }
  @media (min-width: 1024px) {
    padding: 57px 96px 124px 96px;
    section {
      display: flex;
      align-items: center;
    }
    div{
      width: 40%;
        p {
            font-size: 1.6rem;
            font-style: normal;
          }
    }
  }
`;
