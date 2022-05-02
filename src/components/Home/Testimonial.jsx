import React from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';


import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import './Testimonial.css';

const News = () => {
  return (
    <div className="testimonial">
      <h1>¿Qué dicen nuestros clientes?</h1>
      <div className="cards-container-testimonial">
        <Card className="card-testimonial" sx={{ width: 400, height: 400 }}>
          <CardContent className="testimonial-container">
            <FormatQuoteIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography variant="subtitle1" align="center"  component="div">
              Cristina V.
              <br />
              Vet and Vet
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-testimonial"sx={{ width: 400, height: 400 }}>
          <CardContent className="testimonial-container">
            <FormatQuoteIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
             <Typography variant="subtitle1" align="center"  component="div">
              Cristina V.
              <br />
              Vet and Vet
            </Typography>
          </CardContent>
        </Card>
        <Card className="card-testimonial" sx={{ width: 400, height: 400 }}>
          <CardContent className="testimonial-container">
            <FormatQuoteIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
             <Typography variant="subtitle1" align="center"  component="div">
              Cristina V.
              <br />
              Vet and Vet
            </Typography>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default News;