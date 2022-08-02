import React, { useState, useRef, useEffect} from "react";

import axios from 'axios'

import burger from '../../assets/burger.png'
import trash from '../../assets/trash.png'

import { Container, Imagem, H1, ContaineIntens, InputLabel, Input, Button, Orde} from './styles';
const Lista = () => {

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

   useEffect(() => {

    async function fetchOrdes(){
      const { data: newOrdes } = await axios.get("http://localhost:3001/order")
      setOrders(newOrdes)

    }

 fetchOrdes()

  }, [])

    async function deleteOrder(ordeId){

      await axios.delete(`http://localhost:3001/order/${ordeId}`)
    
      const newOrder = orders.filter(order => order.id !== ordeId)
     setOrders(newOrder)

    }

  return(
    <Container>
      <Imagem src={burger}/>

      <ContaineIntens>

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada"/>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputName} placeholder="Steve Jobs"/>

      <Button onClick={addNewOrde}>Novo Pedido</Button>
      <ul>
        {orders.map((orde) => {
          return (
        <Orde key={orde?.id}>
          <div>
          <p>{orde.order}</p> 
          <p>{orde.clientName}</p>
          </div>
          <button onClick={() => deleteOrder(orde?.id)}>
          <img src={trash}/>
          </button>
        </Orde>
          )
        })}
      </ul>
      </ContaineIntens>

    
    </Container>

  )
  
}



export default Lista