import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Making my test react app for COMP 394 Fall 2025 Team 2
        </p>
        <a
          className="App-link"
          href="/helloWorld.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my test page
        </a>
      </header>
    </div>
  );
}

export default App;
