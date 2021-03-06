import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// COUNTER APP CODE
//
// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const setToZero = () => setCounter(0)

//   const decreaseByOne = () => setCounter(counter - 1)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button text='plus' handleClick={increaseByOne} />
//       <Button text='zero' handleClick={setToZero} />
//       <Button text='minus' handleClick={decreaseByOne} />
//     </div>
//   )
// }

// GREETINGS APP CODE
//
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