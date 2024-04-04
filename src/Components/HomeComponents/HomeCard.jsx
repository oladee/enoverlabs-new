import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import { H3, P } from '../../Utils/styled/Typograpyhy'

const HomeCard = ({children, cardTitle, cardText, backgroundColor, textColor, backLeft, height}) => {
  return (
    <StyledHomeCard backgroundColor={backgroundColor} backLeft={backLeft} height={height}>
        <div className="home-card-container">
            <div className="card-container-back">
            </div>
            <div className="card-container-front">
                <div className="card-front-text">
                    <H3 textAlign={"left"} fontWeight={500} color={textColor} paddingBottom={"1rem"}>
                        {cardTitle}
                    </H3>
                    <P mobileFontSize="1rem" mobileLineHeight="1.45rem" textAlign={"left"} lineHeight={"2.375rem"} color={textColor} fontWeight={300}>
                        {cardText}
                    </P>

                    {children}                    
                </div>
            </div>
        </div>
    </StyledHomeCard>
  )
}

export default HomeCard

const StyledHomeCard = styled.div`
     position: relative;
     width: 100%;
    .home-card-container{
        position: relative;
    
        .card-container-back{
            position: absolute;
            top: -20px;
            left: ${props => props.backLeft ?  props.backLeft : "-20px"};
            width: 100%;
            height: ${props => props.height ? props.height : "28.375rem"};
            z-index: 1;
            border: 1px solid ${theme.color.dark};
            background-color: ${props => props.backgroundColor ? props.backgroundColor : "#DBF5FF"};
            @media (max-width: 768px){
                width: 100%;
                height: 18.9375rem;
                left: -20px;
            }
    }
        .card-container-front{
            position: relative; 
            width: 100%;
            height: ${props => props.height ? props.height : "28.375rem"};
            z-index: 2;
            padding: 3rem;
            border: 1px solid ${theme.color.dark};
            background-color: ${props => props.backgroundColor ? props.backgroundColor : "#DBF5FF"};
            @media(max-width: 768px){
                height: 18.9375rem;
                width: 100%;
                padding: 1.5rem;
            }
        }
        
    }
`   