import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
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
      <h1>Phonebook</h1>
      <Filter 
        filter={newFilter} 
        handleFilterChange={handleFilterChange}
      />

      <h2>Add a new number</h2>
      <PersonForm 
        addLine={addLine} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        name={newName}
        number={newNumber}
      />
      
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filter={newFilter}
      />
    </div>
  )

}

export default App