import React, { Component } from 'react'
import styled from 'styled-components'

const ProductList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content:space-evenly;

`
const ProductCard = styled.li`
list-style: none;
width: 250px;
`

const Card = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr repeat(3, 30px);
margin: 10px;
border: 1px dotted grey;
padding: 5px;
`
const Picture = styled.img`
display: flex;
align-content: center;
justify-content: center;
width: 100%;
max-height: 360px;
`
const Name = styled.span``
const Price = styled.span``
const Button = styled.button``

export default class EcommerceCard extends Component {
    render() {
        const product = this.props.product
      // console.log("props",this.props)
        return (
            <ProductCard key={product.id}>
            <Card>
              <Picture src={product.imagem}/>
              <Name>{product.nome}</Name>
              <Price>R$ {product.valor},00</Price>
              <Button onClick={() => this.props.onAddProductToCart(product.id)}>Adicionar ao Carrinho</Button>
            </Card>
          </ProductCard>
        )
    }
}

