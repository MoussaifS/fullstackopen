import { useState } from "react";
function App() {
  const [good , setGood] = useState(0)  
  const [neutral , setNeutral] = useState(0)  
  const [bad , setBad] = useState(0)  
  
  return (
      <div>
        <h1> Give feedback </h1>
        <button onClick={() =>{setGood(good + 1)}}>good</button>
        <button onClick={() =>{setNeutral(neutral + 1)}}>good</button>
        <button onClick={() =>{setBad(bad + 1)}}>bad</button>
        <h1> Statistics </h1>
        <span>good {good}</span><br/>
        <span>neutral {neutral}</span><br/>
        <span>bad {bad}</span><br/>

      </div>
    )
}


export default App;
