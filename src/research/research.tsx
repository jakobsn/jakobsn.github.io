import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Papa from 'papaparse';
import { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the structure of a row in your CSV
type CSVDataRow = {
  blockheight: number;
  timestamp: number;
  versionbits: string;
  coinbase: string; // Assuming the CSV headers are named as such
};

// Define the initial state for chart data
const initialChartData: ChartData<'line'> = {
  labels: [],
  datasets: [
    {
      label: 'Percentage of /P2SH/ in Coinbase',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const Research = () => {
  const [chartData, setChartData] = useState<ChartData<'line'>>(initialChartData);

  useEffect(() => {
    // Replace with actual file paths or a dynamic import
    const files = ['/path/to/your/data/0_to_99999.csv', /* other file paths */];

    Promise.all(files.map(file => loadCSVData(file))).then(allData => {
      const mergedData = ([] as CSVDataRow[]).concat(...allData);
      const updatedChartData = calculateChartData(mergedData);
      setChartData(updatedChartData);
    });
  }, []);

  const loadCSVData = (filePath: string): Promise<CSVDataRow[]> => {
    return new Promise(resolve => {
      Papa.parse(filePath, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data as CSVDataRow[]);
        }
      });
    });
  };

  const calculateChartData = (data: CSVDataRow[]): ChartData<'line'> => {
    // Your logic for calculating the percentage of blocks with '/P2SH/' in the coinbase message
    // ...

    return {
      labels: [],
      datasets: [
        {
          label: 'Percentage of /P2SH/ in Coinbase',
          data: [],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    };
  };

  return (
    <div>
      <h2>Research</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Research;