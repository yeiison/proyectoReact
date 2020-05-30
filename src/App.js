import React from 'react';
import logo from './logo.svg';
import './App.css';

import ManageUsers from'./ManageUsers';
import Login from'./Login';
import HomePage from'./HomePage';
import ManageBusiness from'./ManageBusiness';
import LoginUsers from'./LoginUsers';
import ManageActivos from'./ManageActivos';
import Caracteristicas from './Caracteristicas';
import ManageCelulares from './ManageCelulares';
import Compras from './Compras';
import Partes from './Partes';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>
          
          <Route path="/users">
            <ManageUsers />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/homePage">
            <HomePage />
          </Route>

          <Route path="/business">
            <ManageBusiness />
          </Route>

          <Route path="/activos">
            <ManageActivos />
          </Route>

          <Route path="/caracteristicas">
            <Caracteristicas />
          </Route>

          <Route path="/celulares">
            <ManageCelulares />
          </Route>

          <Route path="/compras">
            <Compras />
          </Route>

          <Route path="/partes">
            <Partes />
          </Route>

          <Route path="/loginUsers">
            <LoginUsers />
          </Route>

            <div className="App">
              <header className="App-header"> 
                <Login/>
              </header>
            </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
