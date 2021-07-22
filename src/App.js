import React from 'react';
import styled from 'styled-components';
import { Ecommerce } from './App.style';
//imports components
import Nav from './components/EcommerceNav/EcommerceNav'
import Principal from './components/EcommercePrincipal/EcommercePrincipal'

function App() {
  return (
    <Ecommerce className="Main">
       <Nav/>
       <Principal/>
    </Ecommerce>
  );
}

export default App;
