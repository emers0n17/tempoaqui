import { Card, CardContent, Typography, Grid } from '@mui/material';

function ForecastList({ data }) {
  // Filtra previsões para mostrar apenas uma por dia
  const dailyForecasts = data.list.filter((forecast, index) => index % 8 === 0).slice(0, 5);

  return (
    <Grid container spacing={2}>
      {dailyForecasts.map((forecast) => {
        const date = new Date(forecast.dt * 1000);
        return (
          <Grid item xs={12} sm={6} md={2.4} key={forecast.dt}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">
                  {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                </Typography>
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
                <Typography variant="h6">
                  {Math.round(forecast.main.temp)}°C
                </Typography>
                <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                  {forecast.weather[0].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ForecastList; 