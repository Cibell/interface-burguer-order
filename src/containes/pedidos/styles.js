import styled from "styled-components";


export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background: #0A0A10;


height: 100%;

`
export const Imagem = styled.img `
width: 342px;
height: 354px;

margin: 11px 0 25px 0;
`
export const H1 = styled.h1 `
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;
text-align: center;
margin: 20px 0 50px 0;
`
export const ContaineIntens = styled.div `
display: flex;
flex-direction: column;
`

export const InputLabel = styled.p `
color: #EEEEEE;
padding-left: 20px;
`
export const Input = styled.input `
width: 342px;
height: 58px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
padding-left: 20px;
border: none;
margin-bottom: 40px;
`

export const Button = styled.button `
width: 342px;
height: 68px;

background: #D93856;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;
border: none;
cursor: pointer;


`