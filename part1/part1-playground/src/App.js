import Name from './Name'
const Hello = (props) => {
    return (
      <div>
        <p>this the header for rent for {props.price} </p>
        <p>the date is {props.date}</p>
      </div>
    )
}

const App = () => {  
  console.log('this is the first test')
  const date = new Date("2022-03-25")
  const a =  12
  const b = 3 
  console.log(date)

  return (<div>
    <Hello price= '23' date={23+ 3} />
    <Name/>
    
    <p>{a} and {b} is equal to {a+b}</p>
    <p>Hello world</p>
  </div>)
  
}



export default App