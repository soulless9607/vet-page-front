import React from 'react'

import  Home from '../pages/Home';
import Products from '../pages/Products';
import AboutUs from '../pages/AboutUs';
import Actuality from '../pages/Actuality';
import TrainingPage from '../pages/TrainingPage';
import Login  from '../pages/Login';
import ProductDetail from '../pages/ProductDetails'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Formacion from '../pages/Formacion';


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Home/>} />
        <Route path="/productos" element={<Products />} />
        <Route path="/conocenos" element={<AboutUs />} />
        <Route path="/actualidad" element={<Actuality />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/producto" element={<ProductDetail />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="*" element={<Navigate to='/inicio' replace />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
