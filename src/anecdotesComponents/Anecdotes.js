import React, { useState } from 'react';



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const Statistics = ({votes}) => {
      let index = votes.indexOf(Math.max(...votes))
      return (
        <div className="container text=center">
          <h1>Anecdote with most votes</h1>
          <div>{anecdotes[index]}</div>
          <div>Has {votes[index]} votes</div>
        </div>
      )
  }


const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const setRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const giveVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
 

  return (
      <>
    <div className="container">
      {anecdotes[selected]}
      <div>
         <button onClick={setRandom}>Next Anecdote</button>
      </div>
     
    </div>
    <div className="container mt-3 mb-3">
        Has {votes[selected]} votes
        <div>
         <button onClick={() => giveVote(selected)}>Vote</button>
        </div>
        
    </div>
    <Statistics  votes={votes}/>
    </>
  )
}


export default Anecdotes