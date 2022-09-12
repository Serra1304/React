import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un parrafo</p>
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
