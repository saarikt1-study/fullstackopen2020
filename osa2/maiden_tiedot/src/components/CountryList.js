import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const CountryList = ({ countries, search }) => {

  if (search.length < 2) return null

  const filteredList = 
    countries
      .filter(country => 
        country.name.toLowerCase()
        .includes(search.toLowerCase()))

  if (filteredList.length === 1) {
    return <CountryDetails country={filteredList[0]} />
  }

  else if (filteredList.length < 10) {
    return (
      <div>
        {filteredList
          .map((country) =>
            <Country
              key={country.alpha2Code} 
              name={country.name} 
            />
        )}
      </div>
    )
  }

  return <p>Too many matches</p>
}

export default CountryList