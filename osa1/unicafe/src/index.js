import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>
const Subheader = ({ text }) => <h2>{text}</h2>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (!(good || neutral || bad)) return <p>No feedback given</p>
  
  const countAverage = (good, neutral, bad) => {
    return (good-bad)/(good+neutral+bad)
  }

  const countPositive = (good, neutral, bad) => (
    good/(good+neutral+bad)
  )
  
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Overall: {good + neutral + bad}</p>
      <p>Average: {countAverage(good, neutral, bad)}</p>
      <p>Positive: {countPositive(good, neutral, bad)} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header = "Give feedback"
  const subheader = "Statistics"

  return (
    <div>
      <Header text={header} />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Subheader text={subheader} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)