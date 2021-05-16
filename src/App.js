import Home from './pages/home'
import Details from './pages/details'
import Header from './components/Header'
import Footer from './components/Footer'
import {HashRouter, Route, Switch} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div>
    <HashRouter>
    <Header/>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
      <Footer/>
    </HashRouter>
  </div>
  );
}
export default App;
