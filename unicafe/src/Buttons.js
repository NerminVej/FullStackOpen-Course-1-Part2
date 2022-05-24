import React from 'react'

function Buttons({goodIncrement,neutralIncrement,badIncrement}) {
    
  return ( 
    <div>
        <button onClick={goodIncrement}>good</button>
        <button onClick={neutralIncrement}>neutral</button>
        <button onClick={badIncrement}>bad</button>
    </div>
  )
}

export default Buttons