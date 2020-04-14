import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneBookService from './services/phoneBook'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)

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

      setNotificationMessage(
        `${person.name} deleted from the phonebook!`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 2000)
    }
  }
  
  const addLine = (event) => {
    event.preventDefault()
    const lineObject = { 
      name: newName, 
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        
        const person = persons.find(p => p.name === newName)
        changeNumber(person.id, lineObject)
      } 
    }
    else {
      phoneBookService
        .create(lineObject)
        .then(returnedLine => {
          setNotificationMessage(
            `${returnedLine.name} added to the phonebook!`
          )
          setTimeout(() => {
            setNotificationMessage(null)
          }, 2000)
          setPersons(persons.concat(returnedLine))
        })
      }
      setNewName('')
      setNewNumber('')
  }

  const changeNumber = (id, newPerson) => {
    phoneBookService
      .update(id, newPerson)
      .then(response => {
        const updatedPerson = persons.find(p => p.name === response.name)
        updatedPerson.number = newPerson.number
        setPersons(persons.map(person => person.id === newPerson.id ? updatedPerson : person))
        
        setNotificationMessage(
          ` Number changed for ${updatedPerson.name}`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 2000)
      })
      .catch(() => {
        setNotificationMessage(
          `ERROR: Couldn't find ${newPerson.name} from the server anymore.`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000) 
        setPersons(persons.filter(p => p.id !== id))
      })
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage}/>
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