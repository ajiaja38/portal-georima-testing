import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
);

const ChartSuhu = () => {
  const now = new Date();
  const currentMinute = now.getMinutes().toString().padStart(2, '0');
  const currentSecond = now.getSeconds().toString().padStart(2, '0');

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => {
      const minute = (parseInt(currentMinute) - i).toString().padStart(2, '0');
      return `${now.getHours()}.${minute}.${currentSecond}`;
    }),
    datasets: [
      {
        label: 'Suhu (°C)',
        data: Array.from({ length: 30 }, () => Math.random() * (40 - 20) + 20),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Waktu (Menit)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Suhu (°C)',
        },
      },
    },
  };

  return (
    <div className="p-2 bg-slate-50 border rounded-lg w-[60%]">
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartSuhu;
