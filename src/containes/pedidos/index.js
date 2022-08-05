import React, { useState, useRef} from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios'

import Logo from '../../assets/logo.png'

import H1 from "../../companents/Title"
import Button from "../../companents/Button"

import { Container, Imagem, ContaineIntens, InputLabel, Input} from './styles';
const Pedidos = () => {
  const history = useHistory()

  const [ orders, setOrders] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()

    async function addNewOrde(){

      const newOrder = {
        order: inputOrder.current.value, 
        clientName: inputName.current.value,
      };
      
      try {
        const {data} = await axios.post("http://localhost:3001/order", {
        ...newOrder,
        
      });
      setOrders([...orders,data] )
    } catch (error){
      console.log(error);
    }
    history.push("/Lista")

    }
    
  return(
    <Container>
      <Imagem src={Logo}/>

      <ContaineIntens>

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada"/>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputName} placeholder="Steve Jobs"/>

      <Button onClick={addNewOrde}>Novo Pedido</Button>
      </ContaineIntens>

    
    </Container>

  )
  
}



export default Pedidos