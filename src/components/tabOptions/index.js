import React from 'react'
import { OptionsContainer, OptionsEncomendas, OptionsProdutos, Separador, OptionsSair, OptionsCenter } from './styles'
import { Img } from '../header/styles'
import farmais from "../../Assets/farmais.png"

const TabOptions = ({setActiveTab, setActiveScreen}) => {
  return (
    <OptionsContainer>
      <Img src={farmais} alt="" />
      <OptionsCenter>
      <OptionsProdutos onClick={() => setActiveTab('Produtos')}>Produtos </OptionsProdutos>
      <Separador></Separador>
      <OptionsEncomendas onClick={() => setActiveTab('Encomendas')}>Encomendas </OptionsEncomendas>
      </OptionsCenter>
    
      <OptionsSair onClick={() => setActiveScreen('Login')}> Sair </OptionsSair>
      
      
    </OptionsContainer>
  )
}

export default TabOptions