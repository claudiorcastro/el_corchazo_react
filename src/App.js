import logo from './logo.svg';
import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div >
      <Carrusel/>
      <Navbar/>
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
    </div>
  );
}

export default App;
