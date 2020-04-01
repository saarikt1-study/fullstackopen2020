import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneBookService from './services/phoneBook'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
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

  const deleteLine = (id) => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      phoneBookService.deletePerson(person.id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const addLine = (event) => {
    event.preventDefault()
    const lineObject = { 
      name: newName, 
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`) 
    }
    else {
      phoneBookService
        .create(lineObject)
        .then(returnedLine => {
          setPersons(persons.concat(returnedLine))
          setNewName('')
          setNewNumber('')
      })
    }
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
        deleteLine={() => deleteLine}
      />
    </div>
  )

}

export default App