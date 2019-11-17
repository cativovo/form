import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Input from './Input';


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  label > span {
    cursor: pointer;
  }
`;

const App = () => (
  <div className="App">

    <h1>form!</h1>
    <GlobalStyle />
    <Input isRequired label="sample question?" />
    <h1>test</h1>
    <Input label="this is not requried sample question?" />
  </div>
);


export default App;
