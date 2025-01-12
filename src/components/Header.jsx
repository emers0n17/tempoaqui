import { AppBar, Toolbar, Typography, Container, Box, useTheme } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

function Header() {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                background: 'linear-gradient(135deg, #00B4D8 0%, #90E0EF 50%, #4ECDC4 100%)',
                padding: '12px 35px',
                borderRadius: '30px',
                boxShadow: '0 4px 25px rgba(0, 180, 216, 0.25)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 30px rgba(0, 180, 216, 0.35)',
                  background: 'linear-gradient(135deg, #00B4D8 0%, #4ECDC4 50%, #90E0EF 100%)',
                }
              }}
            >
              <WbSunnyIcon 
                sx={{ 
                  fontSize: 35, 
                  color: '#fff',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                }} 
              />
              <CloudIcon 
                sx={{ 
                  fontSize: 28, 
                  color: '#fff',
                  position: 'absolute',
                  left: 45,
                  opacity: 0.8,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                }} 
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(to right, #FFFFFF 0%, #E0F7FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1.2px',
                  textShadow: '0 2px 15px rgba(255,255,255,0.3)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::after': {
                    opacity: 1,
                  }
                }}
              >
                TempoAqui
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 