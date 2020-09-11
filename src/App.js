import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <h1>LOGIN</h1>
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
