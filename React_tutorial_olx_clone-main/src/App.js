import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SignupPage from './Pages/Signup';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route path='/'>
        <Home />
        </Route>

        <Route path='/signup'>
        < SignupPage/>
        </Route>
      
      </Router>
     
    </div>
  );
}

export default App;
