import React, { useState } from 'react'

const Line = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }

  const addLine = (event) => {
    event.preventDefault()
    const lineObject = {
      name: newName
    }

    setPersons(persons.concat(lineObject))
    setNewName('')
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addLine}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) =>
          <Line key={person.name} name={person.name} />
        )}
      </div>
    </div>
  )

}

export default App