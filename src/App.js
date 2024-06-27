import React, {useState} from 'react'
import Chart from './components/Chart'

import data from './data/tempData'
import TimeframeSelector from './components/TimeframeSelector'
import './styles/chart.css'

const App = () => {
  const [timeframe, setTimeframe] = useState('daily')
  const filterDataByTimeFrame = (data, timeframe) => data

  const filteredData = filterDataByTimeFrame(data, timeframe)
  console.log(timeframe)
  return (
    <div className="chart-container">
      <h1>My Chart</h1>
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart data={filteredData} />
    </div>
  )
}

export default App
