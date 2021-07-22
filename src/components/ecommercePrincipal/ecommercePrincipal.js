import React, { Component } from 'react'
import Filtros from "../EcommerceFiltros/EcommerceFiltros"
import Produtos from "../EcommerceProdutos/EcommerceProdutos"
import Carrinho from "../EcommerceCarrinho/EcommerceCarrinho"
import { BoxPrincipal } from './Ecommerce.stylePrincipal'

export default class EcommercePrincipal extends Component {
    render() {
        return (
            <BoxPrincipal>
                <Filtros/>
                <Produtos/>
                <Carrinho/>                 
            </BoxPrincipal>
        )
    }
}
