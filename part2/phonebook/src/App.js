import { useState , useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    axios
    .get("http://localhost:8000/persons")
    .then(r => {
      console.log(r)
      setPersons(r.data)
  })
  }, [])

  const [search, setSearch] = useState("");


  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch}/>


      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons = {setPersons}/>


      <h2>Numbers</h2>

      <Persons persons={persons} search={search}/>
      
    </div>
  );
};

export default App;
