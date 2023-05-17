import { useState } from "react";

const Statistics = (props) => {

  if (props.arr == 0){
    return ( <div>
      
      NO feedback given</div> 
  )}

  const all = props.arr.length
  const total = props.arr.reduce((acm , sum )=> acm + sum , 0)
  const positive = props.arr.filter(v => v == 1).length
  const neg = props.arr.filter(v => v == -1).length
  const neutral =props.arr.filter(v => v == 0).length
  console.log(positive)
  return (

    <div>
      <span>positive {positive}</span> <br/>
      <span>neutral {neutral}</span> <br/>
      <span>bad {neg}</span> <br/>
      <span>all {all}</span> <br/>
      <span>avg { (( total / all)* 2)-1}</span> <br/>
      <span>positive {(positive/total)*100} %</span>
    </div>
  )
}

function App() {
  const [good , setGood] = useState(0)  
  const [neutral , setNeutral] = useState(0)  
  const [bad , setBad] = useState(0)  

  
  const [allClicks, setAll] =  useState([])
  
  const handleGood = () =>{
    setAll([...allClicks, 1])
  }
  const handleNeutral = () =>{
    setAll([...allClicks, 0])
  }
  const handleBad = () =>{
    setAll([...allClicks, -1])
  }

  
  return (
      <div>
        <h1> Give feedback </h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
        <h1> Statistics </h1>
        <Statistics arr= {allClicks} />
        
      
      </div>
    )
}


export default App;
