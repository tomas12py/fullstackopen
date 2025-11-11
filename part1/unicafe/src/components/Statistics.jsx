
const StatisticLine = ({value,statisticType}) => {

return (
<tr>

<td>{`${value}  ${statisticType}`}</td>   

</tr>

)


}

export const Statistics = ({allStatistics,total}) => {


    const positiveAverage = allStatistics.goodStatistic.value / total 
    
  return (

    <table style={{marginTop:"2rem"}}>
    <tbody>
    <StatisticLine value={allStatistics.goodStatistic.value} statisticType = {allStatistics.goodStatistic.statisticName}/>
    <StatisticLine value={allStatistics.neutralStatistic.value}  statisticType={allStatistics.neutralStatistic.statisticName}/>
    <StatisticLine value={allStatistics.badStatistic.value} statisticType={allStatistics.badStatistic.statisticName}/>
    <tr><td>{`all ${total}`}</td></tr>
    <tr><td>{`average ${(allStatistics.goodStatistic.value * 1 + allStatistics.neutralStatistic.value * 0 + allStatistics.badStatistic.value * -1) / total }`}</td></tr>
    <tr><td>{`positive ${positiveAverage * 100}`}</td></tr>
    </tbody>
    </table>

  )
}
