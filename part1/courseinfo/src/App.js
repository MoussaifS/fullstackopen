const Course = (props) => {
  const courses = props.course
  console.log(courses)
  return (
      <div>

        {courses.map(course => 
          <div key={course.id}><Header name={course.name} />
          <Content parts = {course.parts}/>
          <Total total={course.parts}/></div>
          
  )} 
        
      </div>

      
      )
}

const Header = (props) => {

  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <div>
    {parts.map(part =><p key= {part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
} 



const Total = (props) =>{
  const total = props.total
  const sum = total.reduce(( acc , curr)=> acc + curr.exercises , 0 ) 
  console.log(total)
  return(
    <div>
    <span><b>Number of exercises {sum}</b></span>

    
    </div>
  )
}   

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}
      
export default App
