import { useState } from "react";

const PersonForm = ({persons , setPersons}) => {
    
    const [newName, setNewName] = useState("");
    const [Phone, setPhone] = useState("");

    const handleNewName = (event) => {
        setNewName(event.target.value);
      };

    
      const handlePhone = (event) => {
        setPhone(event.target.value);
      };
      const addDetails = (event) => {
        event.preventDefault();
        
        const details = {
          name: newName,
          number: Phone,
        };
    
        if (
          persons.filter(
            (person) => JSON.stringify(person) === JSON.stringify(details)
          ).length > 0
        ) {
          return alert(`${newName} is already added to phonebook`);
        } else {
          setPersons(persons.concat(details));
          setNewName("");
          setPhone("");
        }
      };
    
      

    return(
        <div>
        <form onSubmit={addDetails}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input onChange={handlePhone} value={Phone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}

export default PersonForm