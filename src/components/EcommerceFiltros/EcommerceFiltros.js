import React, { Component } from 'react'
import { BoxFiltro } from './Ecommerce.styleFiltros'

export default class EcommerceFiltros extends Component {
    
  state = {
    minFilter : '',
    maxFilter : '',
    nameFilter : ''
  }

  onChangeMinFilter = (event) => {
    console.log("Entrou minimo")
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    console.log("Entrou maximo")
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    console.log("Entrou name")
    this.setState({nameFilter: event.target.value})
  }
  
  render() {
        return (
          
        <BoxFiltro>
          
        <div>
            <h2>Filtros</h2>
          <div>
            <label>Valor mínimo:</label>
            <input type="number" 
                   value={this.props.minFilter}
                   onChange={this.props.onChangeMinFilter}
            />
          
          </div>

          <div>
            <label>Valor máximo:</label>
            <input type="number" 
                   value={this.props.maxFilter}
                   onChange={this.props.onChangeMaxFilter} 
            />

          </div>

          <div>
            <label>Busca por nome:</label>
            <input type="text" 
                   value={this.props.nameFilter}
                   onChange={this.props.onChangeNameFilter}
          
           />
          </div>

        </div>             
        </BoxFiltro>
        
        );

    }
}
