const Header = (props) => {
  return (
    <div>
      <h1>{props.header.name}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
    <p>{props.part.parts[0].name} {props.part.parts[0].exercises}</p>
    <p>{props.part.parts[1].name} {props.part.parts[1].exercises}</p>
    <p>{props.part.parts[2].name} {props.part.parts[2].exercises}</p>

    </div>
  )
} 

const Total = (props) =>{
  
  let sum = 0;
  props.total.parts.forEach(element => {
  sum = element.exercises + sum;
});
  return(
    <div>
    <span><b>Number of exercises</b> <i>{sum}</i></span>
    </div>
  )
}   

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header header = {course} />
      <Content part= {course} />
      <Total  total = {course }/>
    </div>
  )
}
      
export default App
