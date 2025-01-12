import { useState, useCallback } from 'react';
import { Container, Box, CssBaseline, IconButton, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WeatherSearch from './components/WeatherSearch';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import Header from './components/Header';
import Footer from './components/Footer';
import { weatherApi } from './services/weatherApi';
import WelcomeScreen from './components/WelcomeScreen';
import WeatherChart from './components/WeatherChart';
import WeatherSkeleton from './components/WeatherSkeleton';

function App() {
  const [mode, setMode] = useState('light');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#FF6B6B',
        light: '#FF8787',
        dark: '#FA5252',
      },
      secondary: {
        main: '#4ECDC4',
        light: '#72EFE9',
        dark: '#45B7AF',
      },
      background: {
        default: mode === 'light' ? '#F8F9FA' : '#212529',
        paper: mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(33, 37, 41, 0.8)',
      },
      text: {
        primary: mode === 'light' ? '#212529' : '#F8F9FA',
        secondary: mode === 'light' ? '#495057' : '#ADB5BD',
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
      h1: { fontWeight: 800 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: mode === 'light' 
              ? '0 10px 30px rgba(0, 0, 0, 0.1)'
              : '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 28px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  });

  const handleSearch = useCallback(async (city) => {
    try {
      setLoading(true);
      setError('');
      setShowWelcome(false);
      const [currentWeather, forecastData] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city)
      ]);
      setWeatherData(currentWeather);
      setForecast(forecastData);
    } catch (err) {
      setError('Cidade não encontrada ou erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: mode === 'light'
            ? 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)'
            : 'linear-gradient(135deg, #212529 0%, #343A40 100%)',
        }}
      >
        <Header />
        <IconButton
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          sx={{
            position: 'absolute',
            right: 20,
            top: 20,
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Container maxWidth="lg" sx={{ flex: 1, mb: 4, mt: 4 }}>
          <WeatherSearch onSearch={handleSearch} loading={loading} />
          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          {showWelcome ? (
            <WelcomeScreen />
          ) : (
            <>
              {loading ? (
                <WeatherSkeleton />
              ) : (
                <>
                  {weatherData && <CurrentWeather data={weatherData} />}
                  {forecast && <WeatherChart data={forecast} />}
                  {forecast && <ForecastList data={forecast} />}
                </>
              )}
            </>
          )}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
