import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// const cors = require("cors");
// App.use(cors())
function App() {
   axios
     // ("localhost:2020/api/actions")

     .get("http://localhost:2020/api/projects")
     .then(res => console.log('projects..',res))
     .catch(err => console.log(err.response));

      axios
        // ("localhost:2020/api/actions")

        .get("http://localhost:2020/api/actions")
        .then(res => console.log('actions..',res.data))
        .catch(err => console.log(err.response));
  
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
    </div>
  );
}

export default App;
