import React from 'react'

const Search = (props) => {
  return (
    <div>
      Find countries&nbsp;
        <input
          value={props.search}
          onChange={props.handleSearchChange}
        />
    </div>
  )
}

export default Search