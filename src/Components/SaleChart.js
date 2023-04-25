import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import saleData from "./SaleData.json";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
      xAxes: [{
          ticks: {
              beginAtZero: true,
              max: 1000,
              min: 0
          }
      }],
      yAxes: [{
          ticks: {
              beginAtZero: true,
              max: 8,
              min: -3
          }
      }]
  }
};

const labels = saleData.map(a => a.label).slice(-14);

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: saleData.map(a => a.value),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const SaleChart = () => {
    return(
        <div>
          <Line options={options} data={data} />;
        </div>
    );
}

export default SaleChart;