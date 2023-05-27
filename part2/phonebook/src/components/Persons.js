import { useState } from "react";

const Persons = ({persons , search}) => {
    
    return (
        <div>
        <ul>

        {persons
          .filter(person => person.name.includes(search))
          .map(person => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>

    )






}

export default Persons