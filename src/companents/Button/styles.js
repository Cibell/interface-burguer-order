import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;

background: ${props => props.isBack ? `rgba(255, 255, 255, 0.14)` :  `#D93856`} ; 

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0 50px 0;


`