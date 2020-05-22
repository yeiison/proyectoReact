import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import PageAbout from './PageAbout';
import ManageUsers from'./ManageUsers';
import Login from'./Login';
import HomePage from'./HomePage';
import ManageBusiness from'./ManageBusiness';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/homePage">HomePage</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>
          <Route path="/about">
            <PageAbout />
          </Route>

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

            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Editar <code>src/App.js</code> y guardar para recargar.
                    
                </p>
                <Welcome/> //Componente
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aprender React
                </a>
              </header>
            </div>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
