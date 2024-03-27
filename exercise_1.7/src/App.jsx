import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const all=(good+neutral+bad)
  const average= (good-bad)/all
  const positive=(good/all)*100
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      
      <h1>statistics</h1>
      <p>
        good { good}
      </p>        
      <p>
        neutral { neutral}
      </p>
      <p>
        bad { bad}
      </p>
      <p>
        all { all}
      </p>
      <p>
        average { average}
      </p>
      <p>
        positive { positive}%
      </p>
    </div>
  )
}

export default App