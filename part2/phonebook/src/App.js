import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    console.log(newName)
    const name = {
      name : newName
    }
    setPersons(persons.concat(name))
    console.log(persons)
    setNewName('')
    
  }

  

  const handleNewName = (event) => {
    setNewName(event.target.value)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      
      ...
      <ul>
      {persons.map(person => <li >{person.name}</li>)}
      </ul>

      
    </div>
    
  )
}

export default App