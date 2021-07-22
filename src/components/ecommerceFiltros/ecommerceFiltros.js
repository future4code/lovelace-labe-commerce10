import React, { Component } from 'react'
import { BoxFiltro } from './ecommerce.styleFiltros'

export default class ecommerceFiltros extends Component {
    render() {
        return (
          
        <BoxFiltro>
          
          <h2>Filtros</h2>
          <div>
          <label>Valor mínimo:</label>
          <input type="number"></input>
          </div>
  
          <div>
          <label>Valor máximo:</label>
          <input type="number" ></input>
          </div>
  
          <div>
          <label>Busca por nome:</label>
          <input type="text"></input>
          </div>  
             
        </BoxFiltro>
        
        );

    }
}
