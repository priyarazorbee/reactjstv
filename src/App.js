import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route,  Switch ,Link } from 'react-router-dom';
import Routes from './routes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
     <Link to="/gallery"> Dashboard </Link> <br/> 
      <Link to="/welcome"> test </Link> 
      </Router>
    </div>
  );
}

export default App;



