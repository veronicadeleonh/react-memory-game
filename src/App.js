import React, { useState, useEffect }  from 'react';
import './App.css';
// import { Route } from "react-router-dom"
import axios from "axios"

const App = () => {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const resp = await axios
        .get("http://jservice.io/api/random")
        .then(response => {
          // console.log("response", response.data)
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

console.log("question", question)

  return (
    <div className="App">
        <h1>Quiz Game</h1>
        <h3>score: {score}</h3>

        {question ? (
          <>
          <h4>{question.category && question.category.title}</h4>
          <h2>{question.question}</h2>
          </>
        ) : null}
        
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
    </div>
  );
}

export default App;
