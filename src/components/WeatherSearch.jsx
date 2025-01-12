import { useState } from 'react';
import { Box, TextField, Button, CircularProgress, InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function WeatherSearch({ onSearch, loading }) {
  const [city, setCity] = useState('');
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        mb: 6,
        mt: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: '30px',
          borderRadius: '12px',
          background: theme.palette.mode === 'light' 
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(18, 18, 18, 0.9)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: '#42A1EC' }} />
                </InputAdornment>
              ),
              sx: {
                background: theme.palette.mode === 'light' ? '#fff' : '#333',
                borderRadius: '4px',
                border: '1px solid #0077CC',
                '&:hover': {
                  borderColor: '#1482D0',
                },
                '&.Mui-focused': {
                  boxShadow: 'rgba(131, 192, 253, 0.5) 0 0 0 3px',
                  borderColor: '#1482D0',
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
          <Button
            type="submit"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
            sx={{
              backgroundImage: 'linear-gradient(#42A1EC, #0070C9)',
              border: '1px solid #0077CC',
              borderRadius: '4px',
              color: '#FFFFFF',
              fontSize: '17px',
              fontWeight: 400,
              letterSpacing: '-0.022em',
              lineHeight: 1.47059,
              minWidth: '120px',
              padding: '4px 15px',
              '&:hover': {
                backgroundImage: 'linear-gradient(#51A9EE, #147BCD)',
                borderColor: '#1482D0',
              },
              '&:active': {
                backgroundImage: 'linear-gradient(#3D94D9, #0067B9)',
                borderColor: '#006DBC',
              },
              '&:focus': {
                boxShadow: 'rgba(131, 192, 253, 0.5) 0 0 0 3px',
              },
              '&.Mui-disabled': {
                opacity: 0.3,
                cursor: 'default',
              },
            }}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WeatherSearch; 