import { Card, CardContent, Box, Grid, Skeleton } from '@mui/material';

function WeatherSkeleton() {
  return (
    <>
      {/* Current Weather Skeleton */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Skeleton variant="circular" width={100} height={100} sx={{ mr: 2 }} />
            <Skeleton variant="text" width={120} height={60} />
          </Box>

          <Skeleton variant="text" width={150} height={30} sx={{ mb: 2 }} />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={4} key={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Skeleton variant="circular" width={24} height={24} />
                  <Skeleton variant="text" width={100} height={24} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Forecast List Skeleton */}
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} sm={6} md={2.4} key={item}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant="text" width={80} height={24} />
                <Skeleton variant="circular" width={50} height={50} sx={{ my: 1 }} />
                <Skeleton variant="text" width={60} height={32} />
                <Skeleton variant="text" width={100} height={24} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default WeatherSkeleton; 