import Name from './Name'


const Hello= () => {
  return (<div>
    <p>hello world</p>
  </div>)
}


const App = () => {  
  console.log('this is the first test')
  const date = new Date()
  const a =  12
  const b = 3 
  console.log(date)

  return (<div>
    <Hello/>
    <Name/>
   
    <p>{a} and {b} is equal to {a+b}</p>
    <p>Hello world</p>
  </div>)
  
}



export default App