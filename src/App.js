import React, { lazy, Suspense } from 'react';
import Home from './pages/home'
import Details from './pages/details'
const Header = lazy(()=> import ('./components/Header'))
const Footer = lazy(()=> import ('./components/Footer'))
import {HashRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
    <HashRouter>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Header/>
      </Suspense>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Footer/>
      </Suspense>
    </HashRouter>
  </div>
  );
}
export default App;
