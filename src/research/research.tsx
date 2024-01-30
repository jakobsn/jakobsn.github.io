import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Papa from 'papaparse';
import { ChartData } from 'chart.js';

// Adjust this import path as necessary
import localData from './data.json';

interface LocalDataStructure {
  blocktime: number[];
  bip16sum: number[];
}

const typedData = localData as LocalDataStructure;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the initial state for chart data
const initialChartData: ChartData<'line'> = {
  labels: typedData.blocktime,
  datasets: [
    {
      label: 'Percentage of /P2SH/ in Coinbase',
      data: typedData.bip16sum,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const Research = () => {
  const [chartData, setChartData] = useState<ChartData<'line'>>(initialChartData);

  return (
    <div>
      <h2>Research</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Research;