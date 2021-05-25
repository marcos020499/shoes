import Home from './pages/Home'
import Details from './pages/Details'
import Contact from './pages/Contact'
import  Header from './components/Header'
import  Footer from './components/Footer'
import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {Switch, HashRouter, Route} from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer/>
    </HashRouter>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    background: linear-gradient(gray, black);
    font-family: 'Inconsolata', monospace;
  }
`