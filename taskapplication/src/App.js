import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop'
import Error from './components/Error'
import Login from './components/Login';
import ExchangeMoney from './components/ExchangeMoney';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/exchange-money" component={ExchangeMoney} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
