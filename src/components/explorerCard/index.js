import React from 'react'
import { useState, useEffect} from 'react'
import { SumButton, CardContainer, Categoria, Disponibilidade, Image, Marca, Nome, Preco, Receita, ButtonsContainer, NumberInput, AddButton, SubtractButton } from './styles'


const ExplorerCard = ({product}) => {

  const [num, setNum] = useState(0)
  const [estoque, setEstoque] = useState(product.estoque)
  const [cor, setCor] = useState('')
 
  const incNum = () => {
    setNum(num + 1)
  };

  const decNum = () => {
    setNum(num - 1)
  };

  const sum = () => {
    setEstoque(estoque + num)
    setNum(0)
    
  };

  function handleColor () {
    if ((product.limitePorcento * product.max) > estoque )
      setCor('red')
      else setCor('')
  }

  useEffect(() => {
    handleColor()
  }, [estoque])
  
  

  return (
    <CardContainer>
        <Image src = {product.img}></Image>
        <Nome>{product.nome}</Nome>
        <Categoria>Categorias: {product.categoria}</Categoria>
        <Marca>Marca: {product.marca} </Marca>
        <Receita>Precisa de receita? {product.receita}</Receita>
        <Preco>Preço: {product.valor}</Preco>
        <Disponibilidade cor= {cor}>Quantidade em estoque: {estoque} </Disponibilidade>
        <ButtonsContainer>
          <AddButton onClick= {incNum}>+</AddButton>
          <NumberInput>{num}</NumberInput>
          <SubtractButton onClick= {decNum}>-</SubtractButton>
          
        </ButtonsContainer>
        <SumButton onClick={sum}>Inserir</SumButton>
    </CardContainer>
  )
}

export default ExplorerCard