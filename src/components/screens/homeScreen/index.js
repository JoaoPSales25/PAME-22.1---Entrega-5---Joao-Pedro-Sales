import React from 'react'
import { Container } from './styles';
import Produtos from '../../tabs/produtos';
import Encomendas from '../../tabs/encomendas';
import { useState } from 'react';
import Header from '../../header';


const Home = ({setActiveScreen, activeScreen}) => {

    const [activeTab, setActiveTab] = useState("Produtos");

  return (
    <Container>
      <Header activeTab= {activeTab} setActiveTab = {setActiveTab} setActiveScreen = {setActiveScreen} activeScreen= {activeScreen}/>
      {getCorrectScreen(activeTab)}
    </Container>
  )
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Produtos" :
            return <Produtos/>
        case "Encomendas" :
            return <Encomendas></Encomendas>
        default:
            return <Produtos></Produtos>
    }
}

export default Home