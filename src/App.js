import React, { useState, useEffect }  from 'react';
import './App.css';
// import { Route } from "react-router-dom"
import axios from "axios"
import ScoreCount from "./components/ScoreCount"
import Timer from "./components/Timer"
import RestartGame from './components/RestartGame';


const App = () => {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const resp = await axios
        .get("http://jservice.io/api/random")
        .then(response => {
          setQuestion(response.data[0])
        })
        .catch(error => console.log(error))
      setLoading(false)
    }
    fetchData() 
  }, [])

  const changeHandler = (e) => { 
    setAnswer(e.target.value) 
  }

  return (
    <div className="App">
        <ScoreCount />
        {question ? (
          <>
          <h4>{question.category && question.category.title}</h4>
          <h2>{question.question}</h2>
          </>
        ) : 
          <h2>Loading...</h2>}
        
    <form>
        <input
            type="text"
            id="answer"
            name="answer"
            value={answer}
            onChange={changeHandler}
            placeholder="Answer.."
            />
        <button>Submit</button>
    </form>
          
          <Timer />
          <RestartGame />
    </div>
  );
}

export default App;
