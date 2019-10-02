import React, { useState } from 'react';
import { Table } from 'reactstrap';
import './App.css';
import Anecdotes from './anecdotesComponents/Anecdotes';
import NotesApp from './NotesApp/NotesApp'



const App = () => {
  

  // defining states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  // defining onClick functions for each button
  const handleGood = () => {
   setGood(good => good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral => neutral + 1)
   }

  const handleBad = () => {
   setBad(bad => bad + 1)
  }
  

  const formatValue = (val) => (val * 100).toFixed(1);

    // Return array of values, where 1st item is average and second is positive
    const getValues = () => {
    const divider = good + neutral + bad;
      if (divider === 0) {
        return ["0", "0"];
      }
      return [formatValue((good - bad) / divider), formatValue(good / divider)]
      }
    const [avg, positive] = getValues(); 


  return (
    <>
    <div className="container mt-5">
          <h1 className="text-center pb-2">Stankove ocene</h1>
      <Table bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th><button className="btn btn-success" onClick={handleGood}>Good</button></th>
            <th> <button className="btn btn-primary" onClick={handleNeutral}>Neutral</button></th>
            <th><button className="btn btn-danger" onClick={handleBad}>Bad</button></th>
            <th><h5>Overall Feedback</h5></th>
            <th><h5>Average</h5></th>
            <th><h5>Positive</h5></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th scope="row">Feedback</th>
            <td><p>{good}</p></td>
            <td><p >{neutral}</p></td>
            <td><p>{bad}</p></td>
            <td><p>{good + neutral + bad}</p></td>
            <td><p>{avg}%</p></td>
            <td><p>{positive}%</p></td>
          </tr>
        </tbody>
      </Table>
     </div>
    <hr/>
     <div className="mt-5">
        <Anecdotes  />
     </div>

     <div className="mt-5">
       <NotesApp />
     </div>
     </>
   
  )
}


export default App;
