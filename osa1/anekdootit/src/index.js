import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Votes = ({ votesArray, selected }) => {
  return <p>{votesArray[selected]} votes</p>
}

const MostVotes = ({ votesArray, anecdotes }) => {
  const maxIndex = votesArray.indexOf(Math.max(...votesArray))
  return <p>{anecdotes[maxIndex]}</p>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const rand = () => Math.floor(Math.random() * anecdotes.length)

  const nextAnecdote = () => (setSelected(rand))

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p><em>{props.anecdotes[selected]}</em></p>
      <Votes votesArray={votes} selected={selected}/>
      <Button text="Vote" handleClick={addVote} />
      <Button text="Next anecdote" handleClick={nextAnecdote} />
      
      <h3>Anecdote with the most votes</h3>
      <MostVotes votesArray={votes} anecdotes={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)