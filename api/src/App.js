import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//console.log(process.env.REACT_APP_OMDBAPI_KEY, process.env.REACT_APP_OMDBAPI_URL);

fetch("http://www.omdbapi.com/?t=Terminator&apikey=85c1766e")
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse))

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
    </div>
  );
}

export default App;
