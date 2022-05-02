import React from 'react';

import one from '../../assets/icons/number-one.png';
import two from '../../assets/icons/number-two.png';
import three from '../../assets/icons/number-three.png';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>¿Cómo acceder a nuestra comunidad?</h1>
      <Grid container className="tutorial-container">
        <Grid  xs={4} >
          <Card sx={{ width: 300, height: 200 }} variant="outlined">
            <img src={one} alt=""/>
            <Typography variant="h5">
              Registrate
            </Typography>
          </Card>
        </Grid>
        <Grid  xs={4}>
          <Card sx={{ width: 300, height: 200 }} variant="outlined">
            <img src={two} alt="" />
            <Typography variant="h5">
              Validamos tu información
            </Typography>
          </Card>
        </Grid>
        <Grid  xs={4}>
          <Card sx={{ width: 300, height: 200 }} variant="outlined">
            <img src={three} alt="" />
            <Typography variant="h5">
              ¡Ya estas dentro!
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Button>Únete ahora</Button>
    </div>
  );
};

export default Tutorial;