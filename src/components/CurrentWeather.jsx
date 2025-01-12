import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';

function CurrentWeather({ data }) {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <Typography variant="h3">
            {Math.round(data.main.temp)}°C
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
          {data.weather[0].description}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <ThermostatIcon />
              <Typography>
                Sensação: {Math.round(data.main.feels_like)}°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <OpacityIcon />
              <Typography>
                Umidade: {data.main.humidity}%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <AirIcon />
              <Typography>
                Vento: {Math.round(data.wind.speed * 3.6)} km/h
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather; 