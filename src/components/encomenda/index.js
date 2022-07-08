import React from 'react'
import { InputCheckbox, InputCheckBoxContainer, EncomendaContainer, EncomendaProduto, EncomendaQuantidade } from './style'

const Encomenda = ({encomenda, ToggleEncomendas}) => {

    function handleEncomendaClick () {
        ToggleEncomendas(encomenda.id)
    }

  return (
    
    <EncomendaContainer>
        <InputCheckBoxContainer>
            <InputCheckbox type = {"checkbox"} checked = {encomenda.complete} onChange = {handleEncomendaClick} />
        </InputCheckBoxContainer>
        <EncomendaProduto>
            {encomenda.name} 
        </EncomendaProduto>
        <EncomendaQuantidade>
            Quantidade: {encomenda.quantity}
        </EncomendaQuantidade>
        
    </EncomendaContainer>
 
  )
}

export default Encomenda