import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Hej!</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and lol.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              //href="https://sundhed.dk"
              target="_blank"
              rel="noopener noreferrer"
          >
            learn react
          </a>

          <div>
            <button>login</button>
          </div>
        </header>
      </div>
  );
}

export default App;
