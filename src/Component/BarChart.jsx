import React from "react"
import {Bar} from 'react-chartjs-2'
import { Chart as chartjs } from "react-chartjs-2"

function BarChart({chartData})
{
    return <Bar data={chartData}/>
}
export default BarChart