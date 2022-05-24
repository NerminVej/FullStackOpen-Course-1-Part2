import React, { useState } from 'react'
import StatisticLine from './StatisticLine'

function Statistics({good,neutral,bad}) {
  return (
     
    <div>
        <StatisticLine headertext = "Statisitcs"/>
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {good + neutral + bad}/>
        <StatisticLine text = "average" value = {(good - bad / 3) / 10}/>
        <StatisticLine text = "positives" value = {good / (good + neutral + bad )}/>
        
    </div>
  )
}

export default Statistics