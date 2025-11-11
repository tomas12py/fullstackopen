import { Statistics } from './components/Statistics'
import { useState } from 'react'


export function App() {
  
   const [good,setGood] = useState(0)
   const [neutral,setNeutral] = useState(0)
   const [bad,setBad] = useState(0)

  const allStatistics = {

     goodStatistic: {
 
      value: good,
      statisticName: 'Good'

    },


    neutralStatistic: {
      value: neutral,
      statisticName: 'Neutral'
    },


    badStatistic: {
      value: bad,
      statisticName: 'Bad'
    }


  }

const statisticConditional = allStatistics.goodStatistic.value > 0 || allStatistics.neutralStatistic.value > 0 || allStatistics.badStatistic.value > 0
const sumTotal = allStatistics.goodStatistic.value + allStatistics.neutralStatistic.value + allStatistics.badStatistic.value




return (  

  <div>
  
  <>
  <h1>Give feedback</h1>  
  <div style={{display:"flex",gap:"1rem"}}>
  <button style ={{width:"3.5rem"}}onClick={() => setGood(good + 1)}>{allStatistics.goodStatistic.statisticName}</button>
  <button style ={{width:"3.5rem"}}onClick={() => setNeutral(neutral + 1)}>{allStatistics.neutralStatistic.statisticName}</button>
  <button style ={{width:"3.5rem"}}onClick={() => setBad(bad + 1)}>{allStatistics.badStatistic.statisticName}</button>
  </div>

   {
     statisticConditional ? 
    < Statistics allStatistics={allStatistics} total={sumTotal}/>  : <h2>No feedback given</h2> 
   }

  </>

  </div>



)

}
