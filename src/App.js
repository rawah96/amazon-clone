import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
import Payment from './components/Payment/Payment';

function App() {
  // data layer
  const [{user}, dispatch] = useStateValue();

  // this piece of code will run based on a given condition
  // takes in a function & a dependency 
  // leaving [] blank makes the function run once, once the app loads, and never again
  // if i put a variable [var], it's gonna run everytime the variable changes..
  useEffect(() => {
    // creating a listener that's listening if the user signed in / signed out
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // clean up operations come here
      unsubscribe();
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Navbar />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
