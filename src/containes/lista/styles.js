import styled from "styled-components";



export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background: #0A0A10;


height: 100%;
min-height: 100vh;

`
export const Imagem = styled.img `
width: 342px;
height: 354px;

margin: 11px 0 25px 0;
`
export const ContaineIntens = styled.div `
display: flex;
flex-direction: column;
`

export const Button = styled.button`
width: 342px;
height: 68px;

background: rgba(255, 255, 255, 0.14);

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;

`

export const Orde = styled.li`
width: 342px;
height: 101px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-top: 20px;


display: flex;
justify-content: space-around;
align-items: center;

button{
width: 24px;
height: 28px;
background: none;
border: none;
}
p{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
`