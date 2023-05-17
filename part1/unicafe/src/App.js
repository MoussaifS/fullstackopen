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
    <table>
    
    <tr>
      <td>positive</td>
      <td>{positive}</td>
    </tr>
    <tr>
      <td>neutral</td>
      <td>{neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{neg}</td>
    </tr>
    <tr>
      <td>all</td>
      <td>{all}</td>
    </tr>
    <tr>
      <td>avg</td>
      <td>{ (( total / all)* 2)-1}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{(positive/total)*100} %</td>
    </tr>
  </table>
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
