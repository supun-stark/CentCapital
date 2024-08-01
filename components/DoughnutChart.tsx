'use client'

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const chartdata = {
        datasets: [
            {
                label: 'Banks',
                data: [2478, 1287, 2580],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  return <Doughnut data={chartdata } 
  options={{
    cutout: '60%',
    plugins: {
        legend: {
            display: false
        }
    }
  }}/>
}

export default DoughnutChart