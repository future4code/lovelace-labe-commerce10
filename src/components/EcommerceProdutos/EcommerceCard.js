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
      
      console.log("props",this.props)
        return (
            <ProductCard key={this.props.id}>
            <Card>
              <Picture src={this.props.imagem}/>
              <Name>{this.props.name}</Name>
              <Price>R$ {this.props.value}</Price>
              <Button>Adicionar ao Carrinho</Button>
            </Card>
          </ProductCard>
        )
    }
}

