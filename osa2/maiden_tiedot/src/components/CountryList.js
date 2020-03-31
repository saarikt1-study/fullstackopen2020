import React from 'react'
import Country from './Country'

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) =>
        <Country key={country.alpha2Code} name={country.name} />
      )}
    </div>
  )
}

export default CountryList