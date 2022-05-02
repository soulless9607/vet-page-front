import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cardiogram from '../../assets/icons/cardiogram.png';
import nurse from '../../assets/icons/nurse.png';
import pow from '../../assets/icons/pow.png';
import shampoo from '../../assets/icons/shampoo.png';
import veterinarian from '../../assets/icons/veterinarian.png';

import './Home.css';

const Banner = () => {
  const categories = [
    { label: 'Higiene'},
    { label: 'Fungibles'},
  ];

  return (
    <div class="container-banner">
      <h1>La plataforma número 1 para veterinarios</h1>
      <div class="search-banner" style={{marginTop: 80}}>
        <TextField id="outlined-basic" variant="outlined"
          sx={{ width: 400 }}
          placeholder="Busca aquí tu producto"
         />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categories}
          sx={{ width: 260 }}
          renderInput={(params) => <TextField {...params} placeholder='Selecciona una categoria' />}
        />
        <Button className="search-btn" variant="contained"  sx={{ width: 200 }}>
          Buscar
        </Button>
      </div>
      <div class="cards-banner">
        <Card className="banner-cards" sx={{ width: 164, height: 164 }}>
          <CardContent className="cards-content">
            <img alt="" src={cardiogram} width={53}  height={53}/>
            <p>Solo marcas líderes</p>
          </CardContent>
        </Card>
        <Card className="banner-cards" sx={{ width: 164, height: 164 }}>
          <CardContent className="cards-content">
            <img alt="" src={pow} width={53} />
            <p>Envíos en 24 horas</p>
          </CardContent>
        </Card>
        <Card className="banner-cards" sx={{ width: 164, height: 164 }}>
          <CardContent className="cards-content">
            <img alt="" src={shampoo} width={53} />
            <p>Cuidando del medioambiente</p>
          </CardContent>
        </Card>
        <Card className="banner-cards" sx={{ width: 164, height: 164 }}>
          <CardContent className="cards-content">
            <img alt="" src={nurse} width={53} />
            <p>Solo para veterinarios</p>
          </CardContent>
        </Card>
        <Card className="banner-cards" sx={{ width: 164, height: 164 }}>
          <CardContent className="cards-content">
            <img alt="" src={veterinarian} width={53} />
            <p>Area personal con favoritos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Banner;