import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter} />
      <Button text='plus' handleClick={increaseByOne} />
      <Button text='zero' handleClick={setToZero} />
      <Button text='minus' handleClick={decreaseByOne} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age
  
//   return (
//     <>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born {bornYear()}</p>
//     </>
//   )
// }

// const App = () => {
//   const nimi = 'Pekka'
//   const ika = 29

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={nimi} age={ika} />
//     </>
//   )
// }