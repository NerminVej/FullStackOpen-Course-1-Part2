import React from 'react'

function StatisticLine({text,value,headertext}) {
  return (
    <div>
        <h1>{headertext}</h1>
        <p>{text} {value}</p>

    </div>
  )
}

export default StatisticLine