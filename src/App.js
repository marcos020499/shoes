import Home from './pages/home'
import Details from './pages/details'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/details' component={Details}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
