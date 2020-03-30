import React from 'react'
import Line from './Line'

const Persons = (props) => (
  <div>
    {props.persons.map((person) =>
      <Line key={person.name} person={person} filter={props.filter} />
    )}
  </div>
)

export default Persons