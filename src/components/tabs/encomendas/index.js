import React from 'react'
import { useState, useRef } from 'react'
import { ToDoButtons, ToDoContainer, ToDoAdd, ToDoComplete, ToDoInputQuantity, ToDoInputProduct } from './styles'
import ToDoList from '../../toDoList'
import uuidv4 from "../../../../node_modules/uuid/dist/v4"


const Encomendas = () => {

  const [encomendas, setEncomendas] = useState ([])
  const encomendaNameRef = useRef()
  const encomendaQuantityRef= useRef()

 function ToggleEncomendas (id) {
   const novasEncomendas = [...encomendas]
   const encomenda = novasEncomendas.find(encomenda => encomenda.id === id)
   encomenda.complete = !encomenda.complete
   setEncomendas(novasEncomendas)
 }

  function handleAddEncomenda (e) {
    const name = encomendaNameRef.current.value
    const quantity = encomendaQuantityRef.current.value
    if (quantity === '') return 
    if (name === '') return 
    console.log(name)
    setEncomendas (prevEncomendas => {
      return [...prevEncomendas, {id: uuidv4(), name: name, quantity: quantity, complete: false}]
    })
    encomendaNameRef.current.value = null
    encomendaQuantityRef.current.value = null
  }

  function handleClearEncomendas () {
    const newEncomendas = encomendas.filter (encomenda => !encomenda.complete)
    setEncomendas (newEncomendas)
  }

  return (
    <ToDoContainer>
      <ToDoList encomendas = {encomendas} ToggleEncomendas = {ToggleEncomendas}/>
      <ToDoButtons>
        <ToDoInputProduct ref = {encomendaNameRef} placeholder='Produto'/>
        <ToDoInputQuantity ref = {encomendaQuantityRef} placeholder='Quantidade' />
        <ToDoAdd onClick = {handleAddEncomenda}>Adicionar</ToDoAdd>
        <ToDoComplete onClick = {handleClearEncomendas}>Limpar Marcados</ToDoComplete>
      </ToDoButtons>
      
      
    </ToDoContainer>
  )
}

export default Encomendas