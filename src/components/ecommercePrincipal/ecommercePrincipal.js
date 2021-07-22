import React, { Component } from 'react'
import Filtros from "./../ecommerceFiltros/ecommerceFiltros"
import Produtos from "./../ecommerceProdutos/ecommerceProdutos"
import Carrinho from "./../ecommerceCarrinho/ecommerceCarrinho"

export default class ecommercePrincipal extends Component {
    render() {
        return (
            <ecommercePrincipal>
                <Filtros/>
                {/* <Produtos/>
                <Carrinho/>                 */}
            </ecommercePrincipal>
        )
    }
}
