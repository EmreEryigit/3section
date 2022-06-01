

import ".//Chart.css";
import React from 'react'
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value
    })
    const totalMax = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => {
        return <ChartBar
          key={index}
          label={dataPoint.label}
          value={dataPoint.value}
          max={totalMax}
        />
      })}
    </div>
  )
}

export default Chart
