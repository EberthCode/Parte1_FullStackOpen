import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [Feedback, setFeedback] = useState(false)
  const handleGoodClick = () => {
    setGood(good + 1)
    setFeedback(true)}
  const handleBadClick = () => {
    setBad(bad + 1)
    setFeedback(true)}
  const handleNeutralClick = () =>{ 
    setNeutral(neutral + 1)
    setFeedback(true)}
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} Feedback={Feedback}/>
      </div>
      
      )
}
const Statistics=(props)=>{
  if(!props.Feedback){
  return <h1>No feedback given</h1>
  }
  const all=(props.good+props.neutral+props.bad)
  const average= (props.good-props.bad)/all
  const positive=(props.good/all)*100
  return(
    <>
    <h1>statistics</h1>
    <p>good {props.good}</p>  
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}%</p>
    </>
  )
}
export default App