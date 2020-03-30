import React from 'react'

const Line = ({ person, filter }) => {
  if (!filter || person.name.toLowerCase().includes(filter.toLowerCase())) {
    return <p>{person.name}: {person.number}</p>
  }
  else return null
}

export default Line