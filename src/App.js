import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(()=>{
    getAdvice();
  },[])

  function getAdvice(){
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const {advice} = response.data.slip;
      setAdvice(advice)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="App">
      <div className="cards">
      <h1 className="heading">{advice}</h1>
      <button className='button' onClick={getAdvice}>
        <span>Need better advice!! </span>
      </button>
      </div>
        
    </div>
  );
}

export default App;
