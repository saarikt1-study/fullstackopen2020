import React, { useState } from 'react'

const Line = ({ person }) => {
  return (
    <p>{person.name}: {person.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addLine = (event) => {
    event.preventDefault()
    const lineObject = { name: newName, number: newNumber}

    persons.some(person => person.name === lineObject.name) 
    ? alert(`${newName} is already added to the phonebook`)
    : setPersons(persons.concat(lineObject))
    
    setNewName('')
    setNewNumber('')
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
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) =>
          <Line key={person.name} person={person} />
        )}
      </div>
    </div>
  )

}

export default App