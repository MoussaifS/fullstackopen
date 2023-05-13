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
    <p>{props.part[0].name} {props.part[0].exercises}</p>
    <p>{props.part[1].name} {props.part[1].exercises}</p>
    <p>{props.part[2].name} {props.part[2].exercises}</p>

    </div>
  )
} 

const Total = (props) =>{

  // const sum = props..exercis.map((acum  , num ) => acum + num)
  let sum = 0;
props.total.forEach(element => {
  sum = element.exercises + sum;
});



  return(
    <div>
    <span><b>Number of exercises</b> <i>{sum}</i></span>
    </div>
  )
}   

const App = () => {

  const course = 'Half Stack application development'
  const parts =[
    {
      name: 'Fundamentals of React',
      exercises: 10
    }, 
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component' ,
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header header = {course} />
      <Content part= {parts} />
      <Total  total = {parts }/>
    </div>
  )
}

export default App
//      <Total total = {exercises1 + exercises2 + exercises3} />
