import React, { useState, useRef, useEffect} from "react";

import axios from 'axios'

import Logo from '../../assets/logo.png'

import { Container, Imagem, H1, ContaineIntens, InputLabel, Input, Button} from './styles';
const App = () => {

  const [ orders, setOrders] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()

    async function addNewOrde(){

      const newOrder = {order: inputOrder.current.value, 
        clientName: inputName.current.value,
        price: 122,
      };
      
      try {await axios.post("http://localhost:3001/order", {
        ...newOrder,
        
      });
      setOrders([...orders,newOrder] )
    } catch (error){
      console.log(error);
    }
      

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



export default App