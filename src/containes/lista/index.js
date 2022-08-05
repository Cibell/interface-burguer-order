import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios'

import burger from '../../assets/burger.png'
import trash from '../../assets/trash.png'

 import H1 from "../../companents/Title"
 import Button from "../../companents/Button"

import { Container, Imagem, ContaineIntens, Orde} from './styles';

const Lista = () => {

  const [ orders, setOrders] = useState([])
  const history = useHistory()

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
    function goBackPage(){
      history.push("/")
    }

  return(
    <Container>
      <Imagem src={burger}/>

      <ContaineIntens>

      <H1>Pedidos</H1>

      <ul>
        {orders.map((orde) => {
          return (
        <Orde key={orde.id}>
          <div>
          <p>{orde.order}</p> 
          <p>{orde.clientName}</p>
          </div>
          <button onClick={() => deleteOrder(orde.id)}>
          <img src={trash}/>
          </button>
        </Orde>
          )
        })}
      </ul>

      <Button isBack={true} onClick={goBackPage}>Voltar</Button>
   
      </ContaineIntens>

    
    </Container>

  )
  
}



export default Lista