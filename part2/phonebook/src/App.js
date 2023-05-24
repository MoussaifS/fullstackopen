import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'ss' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    
    const name = {
      name: newName
    }
      
    if (persons.filter(person => person.name === name.name).length > 0 ){
      return alert(`${newName} is already added to phonebook`)
    }else {
      setPersons(persons.concat(name))
      setNewName('')
    }
    
    
  }

  

  const handleNewName = (event) => {
    setNewName(event.target.value)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName} />
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