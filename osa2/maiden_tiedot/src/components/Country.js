import React from 'react'

const Country = ({ name, setNewSearch }) => {
  return (
    <div>
      {name}&nbsp;
      <button onClick={() => setNewSearch(name)}>
        show
      </button>
    </div>
  )
}

export default Country