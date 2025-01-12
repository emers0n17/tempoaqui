import { Box, Typography, Paper } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';

function WelcomeScreen() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        textAlign: 'center',
        background: 'transparent',
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <WbSunnyIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Bem-vindo ao TempoAqui!
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Descubra o clima em qualquer cidade do mundo com previsões detalhadas e gráficos informativos.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <SearchIcon color="primary" />
        <Typography variant="body2" color="text.secondary">
          Digite o nome de uma cidade acima para começar
        </Typography>
      </Box>
    </Paper>
  );
}

export default WelcomeScreen; 