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
import { useState } from "react"
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App