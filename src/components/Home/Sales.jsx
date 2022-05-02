import React from 'react';
import Carousel from './Carousel'
import { useNavigate }from 'react-router-dom';
import './Sales.css';

import Button from '@mui/material/Button';

const Sales = () => {

  const navegation = useNavigate();
  const sendToProductPage = () => {
    navegation('/productos')
  }
  return (
    <div class="container sales">
      <div class="section-title">
        <h3>Top Ventas</h3>
        <h2>Animales de compañía</h2>
      </div>
      <div className="top-sales_first">
        <Carousel />
        <Button onClick={sendToProductPage} className='more-products' variant="outlined">Ver más productos</Button>
      </div>
      <div class="section-title">
      <h2>Animales de producción</h2>
      <div className="top-sales_first">
        <Carousel />
        <Button className='more-products' variant="outlined">Ver más productos</Button>
      </div>
      </div>
    </div>
  );
};

export default Sales;
