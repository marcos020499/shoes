import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route>
          <GlobalStyle/>
            <Header/>
            <Content/>
            <Footer/>
        </Route>
      </BrowserRouter>
    </>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    background: linear-gradient(rgb(194, 194, 194), gray);
    font-family: 'Inconsolata', monospace;
  }
`
