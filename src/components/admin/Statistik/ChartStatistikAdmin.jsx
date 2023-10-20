import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import statisticData from '../../../api/statisticDummy';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
);

const ChartStatisticAdmin = () => {
  const data = {
    labels: statisticData.map((item) => item.year),
    datasets: [
      {
        label: 'Sumber Daya',
        data: statisticData.map((item) => item.sumberDaya),
        backgroundColor: 'rgb(3, 201, 136, 0.5)',
        borderColor: 'rgb(3, 201, 136, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sumber Daya Cadangan',
        data: statisticData.map((item) => item.sumberDayaCadangan),
        backgroundColor: 'rgb(28, 130, 173, 0.5)',
        borderColor: 'rgb(28, 130, 173, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value >= 1000000) {
              return value / 1000000 + ' juta';
            } else if (value >= 1000) {
              return value / 1000 + ' ribu';
            } else {
              return value;
            }
          },
        },
      },
    },
  };

  return (
    <div className="p-2 shadow-md border rounded-lg flex justify-center items-center w-full">
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartStatisticAdmin;
