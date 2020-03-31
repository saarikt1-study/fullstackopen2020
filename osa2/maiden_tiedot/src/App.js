import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import CountryList from './components/CountryList'

const App = () => {
  const [ newSearch, setNewSearch ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
    
  }, [])
  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  
  
  return (
    <div>
      <h1>Country information</h1>
      <Search 
        search={newSearch}
        handleSearchChange={handleSearchChange} 
      />
      <CountryList 
        countries={countries}
      />
    </div>
  )
}

export default App;
