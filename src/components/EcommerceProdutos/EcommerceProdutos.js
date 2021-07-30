import React, { Component } from 'react'
import { BoxProduto, Header } from './Ecommerce.styleProdutos'
import EcommerceCard from './EcommerceCard'


export default class EcommerceProdutos extends Component {

    state = {
        sort: 'DECRESCENTE'
      }
 
        
      getFilteredAndOrderedList = () => {
        return this.props.products
        .filter((product) => this.props.maxFilter ? product.valor < this.props.maxFilter : true)
        .filter((product) => this.props.minFilter ? product.valor > this.props.minFilter : true)
        .filter((product) => this.props.nameFilter ? product.nome.includes(this.props.nameFilter) : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
      }
    
      onChangeSort = (event) => {
        this.setState({sort: event.target.value})
      }

    render() {           
        const filteredAndOrderedList = this.getFilteredAndOrderedList()    
        return (
            <div>            
            <Header>
                Quantidade de produtos : {filteredAndOrderedList.length}               
                <label>               
                Ordenação:
                    <select value={this.state.sort} onChange={this.onChangeSort}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DESCRESCENTE'}>Decrescente</option>
                    </select>
                </label>
            </Header>
            <BoxProduto>
                {filteredAndOrderedList.map((product) => {
                    return <EcommerceCard
                             product = {product}
                             onAddProductToCart={this.props.onAddProductToCart}
                            />
                })}
            </BoxProduto>

            </div>
        )
    }
}
