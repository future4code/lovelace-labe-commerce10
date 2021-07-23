import React, { Component } from 'react'
import { BoxFiltro } from './Ecommerce.styleFiltros'

export default class EcommerceFiltros extends Component {
    
  state = {
    valorMinimo : '',
    valorMaximo : '',
    buscaNome : ''
  }

  onChangeMinimo = (event) => {
    this.setState({valorMinimo : event.target.value})
  }
  onChangeMaximo = (event) => {
    this.setState({valorMaximo : event.target.value})
  }
  onChangeNome = (event) => {
    this.setState({buscaNome : event.target.value})
  }
  
  render() {
        return (
          
        <BoxFiltro>
          
        <div>
            <h2>Filtros</h2>
          <div>
            <label>Valor mínimo:</label>
            <input type="number" onChange={this.onChangeMinimo} value={this.state.valorMinimo}></input>
          </div>

          <div>
            <label>Valor máximo:</label>
            <input type="number" onChange={this.onChangeMaximo} value={this.state.valorMaximo} ></input>
          </div>

          <div>
            <label>Busca por nome:</label>
            <input type="text" onChange={this.onChangeNome} value={this.state.buscaNome}></input>
          </div>

        </div>
        <p>{this.state.valorMaximo}</p>
             
        </BoxFiltro>
        
        );

    }
}
