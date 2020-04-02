import React from 'react'

const Notification = ({ message }) => {
  const notificationStyle = {
    fontSize: 24,
    color: 'green',
    border: 'green 2px solid',
    marginBottom: 20,
    padding: 10
  }
  
  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification