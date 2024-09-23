import logo from './logo.svg';
import './App.css';


function App() {
  
  fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ad0ff359859a4da0b612fa3afa048cdd")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })

    
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
