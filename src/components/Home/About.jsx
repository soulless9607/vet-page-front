import { Card } from '@mui/material';
import React from 'react'

import star from '../../assets/icons/badge.png';
import delivery from '../../assets/icons/delivery-truck.png';
import service from '../../assets/icons/customer-service.png';
import catalogue from '../../assets/icons/catalogue.png';

import './About.css';


const About = () => {
  return(
    <div className="about">
      <h1>Conócenos</h1>
      <p>En Leonvet somos proveedores de productos zoosanitarios para veterinarios profesionales y nos desctacamos por</p>
      <div className="about-info">
        <div className="about-info_column">
          <div className="about-info_container">
            <Card className="about-card">
              <img src={star} alt="" />
            </Card>
            <p>"Estrella de Oro" a la excelencia profesional</p>
          </div>
          <div className="about-info_container">
            <Card className="about-card">
              <img src={delivery} alt="" />
            </Card>
            <p>Entrega rápida y segura de medicamentos</p>
          </div>
        </div>
        <div className="about-info_column">
          <div className="about-info_container">
            <Card className="about-card">
              <img src={catalogue} alt="" />
            </Card>
            <p>Amplio catálogo de medicamentos y productos zoosanitarios</p>
          </div>
          <div className="about-info_container">
            <Card className="about-card">
              <img src={service} alt="" />
            </Card>
            <p>Te solucionamos cualquier duda en cualquier momento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;