import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/login">
            <h1>LOGIN</h1>
          </Route>
          <Route path="/checkout">
          <Navbar />
            <h1>Checkout</h1>
          </Route>
          <Route path="/orders">
            <h1>Orders</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
