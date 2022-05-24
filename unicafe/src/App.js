import { useState } from 'react'
import Header from "./Header"
import Statistics from './Statistics'
import Buttons from './Buttons'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodIncrement = () =>{
    setGood(good+1)
  }
  const neutralIncrement = () => {
    setNeutral(neutral+1)
  }
  const badIncrement = () =>{
    setBad(bad+1)
  }

  const [hidden, sethidden] = useState(false)
  

  return (
    
    <div>
      <Header name="Give Feedback" />
      
      <Buttons goodIncrement={goodIncrement} neutralIncrement={neutralIncrement} 
      badIncrement = {badIncrement}/>

      {good + neutral + bad > 0  ? <Statistics good = {good} neutral = {neutral} bad = {bad}/> : <p>No Feedback
        Given</p>}
      
    </div>
  )
}

export default App