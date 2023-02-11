import React from 'react';
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
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({datesList, pricesList, id}) => {
   const data = {
      labels: datesList,
      datasets: [
        {
            data: pricesList,
            label: id,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
   };
   const options = {
      responsive: true,
   };

   return <Line options={options} data={data} />;
}

export default Chart;
