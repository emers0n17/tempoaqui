import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeatherChart({ data }) {
  const hourlyData = data.list.slice(0, 8); // Próximas 24 horas (3 em 3 horas)
  
  const chartData = {
    labels: hourlyData.map(item => 
      new Date(item.dt * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    ),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: hourlyData.map(item => item.main.temp),
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Sensação Térmica (°C)',
        data: hourlyData.map(item => item.main.feels_like),
        borderColor: '#4ECDC4',
        backgroundColor: 'rgba(78, 205, 196, 0.5)',
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Variação de Temperatura nas Próximas 24 Horas'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
      }
    }
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box sx={{ width: '100%', height: '300px' }}>
          <Line options={options} data={chartData} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default WeatherChart; 