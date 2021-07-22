import React from 'react';
import styled from 'styled-components';
import { Ecommerce } from './App.style';
//imports components
import Nav from './components/ecommerceNav/ecommerceNav'
import Principal from './components/ecommercePrincipal/ecommercePrincipal'

function App() {
  return (
    <Ecommerce className="Main">
       <Nav/>
       <Principal/>
    </Ecommerce>
  );
}

export default App;
