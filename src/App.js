import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [quote, setQuote]= useState('')
  const getQuote = () => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-08-26&sortBy=publishedAt&apiKey=ad0ff359859a4da0b612fa3afa048cdd") 
    .then(res => {
      console.log(res.data.fact)
      setQuote(res.data.fact)
    }).catch(err =>{
      console.log(err)
    })

  };

  return (
    <div className ="App">
      <button onClick={getQuote}>Get Weather</button>
      {quote && <p>{quote}</p>}
    </div>
  );
 
}

export default App;
