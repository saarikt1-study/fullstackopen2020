import React from 'react'

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {new Intl.NumberFormat().format(country.population)}</p>

      <h3>Languages</h3>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>

      <img src={country.flag} alt="flag" style={{width: 200}}/>
    </div>
  )
}

export default CountryDetails