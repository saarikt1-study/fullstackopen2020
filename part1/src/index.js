import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 29

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))