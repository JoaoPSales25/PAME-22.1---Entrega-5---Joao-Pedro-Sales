import React from 'react'
import Explorer from '../../explorer'
import { products } from '../../../data/produtoslist'

const productsList = products

const Produtos = () => {
  return (
    <Explorer productsList={productsList}/>
  )
}

export default Produtos