import React, { Component } from 'react'
import EcommerceItemCarrinho from './EcommerceItemCarrinho'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  
  padding: 0 20px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`


export default class EcommerceCarrinho extends Component {

    getTotalValue = () => {
        let totalValue = 0
    
        for(let product of this.props.productsInCart) {
          totalValue += product.valor * product.quantity
        }
    
        return totalValue
      }

    render() {
        return <ShoppingCartContainer>
            <h2>Carrinho:</h2>
            <CartListContainer>
            {this.props.productsInCart.map((product) => {
                return <EcommerceItemCarrinho 
                        cartItem={product} 
                        onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                        />
            })}
            </CartListContainer>
            <p>Valor total: R${this.getTotalValue()},00</p>
      </ShoppingCartContainer>
    }
}
