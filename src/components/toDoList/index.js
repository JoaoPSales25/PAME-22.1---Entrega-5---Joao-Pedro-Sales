import React from 'react'
import Encomenda from '../encomenda'

const ToDoList = ({encomendas , ToggleEncomendas}) => {
  return (
    encomendas.map (encomenda => {
        return (
                <Encomenda key = {encomenda.id} encomenda = {encomenda} ToggleEncomendas = {ToggleEncomendas}/>
        )
    })
  )
}

export default ToDoList