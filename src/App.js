import './App.css';
import FetchApi from './FetchApi';
// import apiGet from './FetchApi';


function App() {

       

  
  fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ad0ff359859a4da0b612fa3afa048cdd")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })

    
  return (
    <div className="App">

<FetchApi/>

      <header className="App-header">
        

        <button onClick={App}>Fetch API</button>


        
        



        
      </header>
    </div>
  );
 }

export default App;
