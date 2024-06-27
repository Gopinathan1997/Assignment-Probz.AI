import React, {useState, useEffect} from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import data from '../data/tempData'

const Chart = () => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(data)
  }, [])

  return (
    <div className="chart-container">
      <LineChart
       width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickCount='30'
         
          tickFormatter={value => new Date(value).toLocaleDateString()}
        />
        <YAxis dataKey="value"/>
        <Tooltip
          labelFormatter={value => new Date(value).toLocaleDateString()}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
      </LineChart>
    </div>
  )
}

export default Chart
