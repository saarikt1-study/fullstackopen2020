import React from 'react'

const Line = ({ person, filter, deleteLine }) => {
  if (!filter || person.name.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <div>
        {person.name}: {person.number}
        <button onClick={() => deleteLine(person.id)}>delete</button>
      </div>
    )
  }
  else return null
}

export default Line