import { Box, Container, Link, Typography, IconButton, useTheme, Grid, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function Footer() {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,1) 100%)'
          : 'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.9) 20%, rgba(18,18,18,1) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Sobre o TempoAqui
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 500 }}>
              O TempoAqui é uma aplicação moderna para previsão do tempo, desenvolvida com as mais recentes tecnologias web. 
              Oferecemos informações meteorológicas precisas e atualizadas para qualquer cidade do mundo.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Desenvolvido com React, Material-UI e APIs modernas de previsão do tempo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Conecte-se
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {['github', 'linkedin'].map((network) => (
                  <IconButton
                    key={network}
                    component={Link}
                    href={network === 'github' ? 'https://github.com/emers0n17' : 'https://linkedin.com'}
                    target="_blank"
                    sx={{
                      color: theme.palette.text.primary,
                      background: theme.palette.background.paper,
                      padding: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px) rotate(8deg)',
                        color: network === 'github' ? '#FF6B6B' : '#4ECDC4',
                        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.12)',
                      }
                    }}
                  >
                    {network === 'github' ? <GitHubIcon /> : <LinkedInIcon />}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              background: theme.palette.mode === 'light' 
                ? 'linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1))'
                : 'linear-gradient(45deg, rgba(78, 205, 196, 0.2), rgba(255, 107, 107, 0.2))',
              padding: '8px 16px',
              borderRadius: '20px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                background: 'linear-gradient(45deg, #4ECDC4, #FF6B6B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
              }}
            >
              Powered by Claude 3.5 Sonnet
            </Typography>
            <SmartToyIcon 
              sx={{ 
                fontSize: 18,
                color: theme.palette.mode === 'light' ? '#4ECDC4' : '#FF6B6B',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.1)' },
                  '100%': { transform: 'scale(1)' },
                },
              }} 
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Desenvolvido com
            </Typography>
            <FavoriteIcon
              sx={{
                color: '#FF6B6B',
                fontSize: 20,
                animation: 'pulse 1.5s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              por emers0n17
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 