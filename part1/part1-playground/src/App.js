// import Name from './Name'
// const Hello = (props) => {
  
//   const age = props.age
//   const name = props.name


//   const bornYear = () => new Date().getFullYear() - age



//     return (
//       <div>
//         <p>
//           Hello {name}, you are {age} years old
//         </p>
//         <p>So you were probably borm in {bornYear()}</p>
//       </div>
//     )
// }

// const App = () => {  
//   console.log('this is the first test')


//   return (
//     <div>
//     <Name/>
//     <Hello name='skm' age= {23} />
    
    
//   </div>)
  
// }

import { useState } from "react";
import Display  from "./Display";
import Button from "./Button";

const App =()=>{
  const [counter , setConter] = useState(0)
  // setTimeout(() => {
  //     setConter (counter + 1)
  // }, 1000);

  console.log('rendering...', counter)

  const increaseByOne = () => setConter(counter + 1)
  const decreaseByOne = () => setConter(counter - 1)
  const setToZero = () => setConter(0)

  const handleClick = () => {
    setConter(counter + 1)
  }

  return (
    <div>
    <h1>    <Display counter= {counter}/>   </h1>
    <Button task = {increaseByOne} taskName ="plus"/>
    <Button task = {setToZero} taskName ="reset"/>
    <Button task = {decreaseByOne} taskName ="decrease"/>
    </div>
  )

}

export default App