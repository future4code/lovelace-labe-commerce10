import React from 'react';
import styled from 'styled-components';



const BoxFiltro = styled.div`
margin-top: 15px;
margin-left:10px;
border: solid 1px;
display: flex;
width: 260px;
height: 400px;

div{
    display: flex;
    flex-direction: column;
    padding: 5px;
}

`;


export  class Filtro extends React.Component{
    render(){
    return (
        <BoxFiltro>
      <div>
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

      </div>
      </BoxFiltro>
    );
  }
  }