import styled from "styled-components";
import { theme } from "../Theme";
import Arrow from "../../assets/icon/arrow-right.svg";
import WhiteArrow from "../../assets/ArrowWhite.png";
import { Link } from "react-router-dom";

const color = theme.color;

export const StyledNewButton = styled.button`
  padding: ${theme.fontSize.x} ${theme.fontSize.base};
  font-size: clamp(12px,3.27vw,14px);
  color: #00f;
  border: 1px solid #00f;
  font-weight: 700;
  border-radius: 8px;
  @media (min-width: 1024px) {
    font-size: clamp(16px,1.322vw, 20px) ;
    padding: ${theme.fontSize.x} ${theme.fontSize.base};
  }
`;

export const StyledPrimaryButton = styled(StyledNewButton)`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    width: 2.4rem;
    fill: #00f;
  }
  @media (min-width: 1024px) {
    svg {
      width: 0;
      transition: width .5s ease;
    }
    &:hover svg{
        width: 2.5rem;
        fill: #00f;
    }
  }
`;

export const PrimaryButton = ({ to = "#", Text, handleClick }) => {
  return (
    <Link to={to} onClick={handleClick}>
      <StyledPrimaryButton>
        <h4>{Text}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
        >
          <path d="M15.8691 17.6567L14.4581 16.2388L17.7281 12.9838L4.12306 12.9707L4.12506 10.9707L17.6931 10.9838L14.4781 7.75375L15.8951 6.34375L21.5391 12.0138L15.8691 17.6567Z" />
        </svg>
      </StyledPrimaryButton>
    </Link>
  );
};

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background-color: ${color.secondary};
  color: ${color.light};
  svg {
        fill: #fff;
      }
  @media (min-width: 1024px) {
    &:hover {
      svg {
        display: block;
        fill: #fff;
      }
    }
  }
`;

export const SecondaryButton = ({ to = "#", Text, handleClick }) => {
  return (
    <Link to={to} onClick={handleClick} >
      <StyledSecondaryButton>
        <p>{Text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          className="bb"
        >
          <path d="M15.8691 17.6567L14.4581 16.2388L17.7281 12.9838L4.12306 12.9707L4.12506 10.9707L17.6931 10.9838L14.4781 7.75375L15.8951 6.34375L21.5391 12.0138L15.8691 17.6567Z" />
        </svg>
      </StyledSecondaryButton>
    </Link>
  );
};

const StyledTertiaryButton = styled(StyledPrimaryButton)`
  background-color: ${color.light};
  color:#00f;
  border: none;
  gap: 5px;
  margin-top: ${props => props.m};

  svg {
    fill: #00f;
  }
  transition: 1s ease;
  @media (min-width: 1024px) {
    &:hover {
      svg {
        display: block;
        fill: #00f;
      }
    }
  }
  
`;

export const TertiaryButton = ({ to = "#", Text, handleClick, arrowDown}) => {
  return (
    <Link to={to} onClick={handleClick}>
    <StyledTertiaryButton>
      
        <p>{Text}</p>
        {
          arrowDown ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6.34325 15.037L7.76125 13.626L11.0162 16.896L11.0293 3.29103L13.0293 3.29303L13.0162 16.861L16.2462 13.646L17.6562 15.063L11.9862 20.707L6.34325 15.037Z"/>
        </svg> : <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
      >
        <path d="M15.8691 17.6567L14.4581 16.2388L17.7281 12.9838L4.12306 12.9707L4.12506 10.9707L17.6931 10.9838L14.4781 7.75375L15.8951 6.34375L21.5391 12.0138L15.8691 17.6567Z" />
      </svg>
        }
    </StyledTertiaryButton>
    </Link>
  );
};

export const StyledBlackButton = styled(StyledTertiaryButton)`
background-color:#000;
color:#fff;
border: none;
gap: 5px;
margin-top: ${props => props.m};

svg {
  fill: #fff;
}
transition: 1s ease;
@media (min-width: 1024px) {
  &:hover {
    svg {
      display: block;
      fill: #fff;
    }
  }
}
`

export const BlackButton = ({ to = "#", Text, handleClick, arrowDown}) => {
  return (
    <Link to={to} onClick={handleClick}>
    <StyledBlackButton>
      
        <p>{Text}</p>
        {
          arrowDown ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6.34325 15.037L7.76125 13.626L11.0162 16.896L11.0293 3.29103L13.0293 3.29303L13.0162 16.861L16.2462 13.646L17.6562 15.063L11.9862 20.707L6.34325 15.037Z"/>
        </svg> : <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
      >
        <path d="M15.8691 17.6567L14.4581 16.2388L17.7281 12.9838L4.12306 12.9707L4.12506 10.9707L17.6931 10.9838L14.4781 7.75375L15.8951 6.34375L21.5391 12.0138L15.8691 17.6567Z" />
      </svg>
        }
    </StyledBlackButton>
    </Link>
  );
};


export const MainButton = ({ props, buttText }) => {
  return (
    <StyledMainButton>
      <Link to="/">
        <span>{buttText}</span>
        <img src={props === Arrow ? Arrow : WhiteArrow} alt="" />
      </Link>
    </StyledMainButton>
  );
};

export const TransparentButton = ({
  textColor,
  buttText,
  whiteArrow,
  border,
}) => {
  return (
    <StyledTransButton textColor={textColor} border={border}>
      <Link to="/">
        <span>{buttText}</span>
        <img src={whiteArrow ? WhiteArrow : Arrow} alt="" />
      </Link>
    </StyledTransButton>
  );
};

export const StyledTransButton = styled(StyledPrimaryButton)`
  a {
    background-color: transparent;
    color: ${(props) => (props.textColor ? props.textColor : "#0046FF")};
    }
`;



export const StyledMainButton = styled(StyledPrimaryButton)`
  a {
    display: flex;
    justify-content: flex-start;
    padding: 1rem 1.25rem;
    align-items: center;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : color.primary};
    border: 1px solid ${(props) => props.borderColor || color.primary};
    text-decoration: none;
    color: ${(props) => props.color || color.light};
    font-size: 1rem;
  }
`;
