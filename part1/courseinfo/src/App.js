const Header = (props) => {
    
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
    <p>{props.part} {props.exercis}</p>
    </div>
  )
} 

const Total = (props) =>{
  return(
    <div>
    <span><b>Number of exercises</b> <i>{props.total}</i></span>
    </div>
  )
} 

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header = {course} />
      
      <Content part= {part1} exercis={exercises1}/>
      <Content part= {part2} exercis={exercises2}/>
      <Content part= {part3} exercis={exercises3}/>

      <Total total = {exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

export default App