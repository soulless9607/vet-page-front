import React from "react";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import vet from '../../assets/images/background-section/call-to-action.jpg';


import './Join.css';

const Join = () => {
  return (
    <div className="join">
      <Grid xs={4}>
        <img src={vet} alt="" />
      </Grid>
      <Grid xs={4}>
        <div className="join-typo">
          <h1>En veterinarios </h1>
          <p>Trabajamos con las mejores marcas y disponemos del catálogo más amplio de medicamentos para el cuidado y tratamiento médico de los animales.</p>
        </div>
      </Grid>
      <Grid xs={4}>
        <Button>Apúntate ahora</Button>
      </Grid>
    </div>
  );
};

export default Join;