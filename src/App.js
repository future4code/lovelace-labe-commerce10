import React from 'react';
import styled from 'styled-components';
import { Ecommerce } from './App.style';
//imports components
import Principal from './components/EcommercePrincipal/EcommercePrincipal'

function App() {
  return (
    <Ecommerce className="Main">
       <Principal/>
    </Ecommerce>
  );
}

export default App;
