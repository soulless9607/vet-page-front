import React, { useState } from 'react'
import Navbar from '../components/UI/Navbar/Navbar';
import Footer from '../components/UI/Footer/Footer';

import { 
  Grid, 
  Card, 
  TextField, 
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Checkbox
  } from '@mui/material'

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import './StylePages.css'

export default function Login() {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <header>
        <Navbar/>
      </header>
      <Grid container sx={{py:20}}>
        <Grid xs={6} className='login-container'>
          <Card className="login-card" sx={{height: 670}}>
            <h2>Acceso Clientes</h2>
            <FormControl sx={{ m: 1 }} className="login-form" >
              <TextField id="outlined-basic" 
                label="Nombre de Usuario" 
                variant="outlined"
                sx={{ m:2, width:"100%"}}
               />
              <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{ m:2, width:"100%"}}
              />    
              <Button variant="contained" sx={{ mt:3, width: "60%"}}>Ingresar</Button>       
            </FormControl>
          </Card>
        </Grid>
        <Grid xs={6} className='register-container' sx={{width:"60%"}}>
          <Card className="register-card" sx={{height: 670}}>
            <h2>¿Todavía no tienes acceso?</h2>
            <FormControl className="login-form">
              <TextField id="outlined-basic" 
                  label="Número de cliente" 
                  variant="outlined"
                  sx={{ m:2, width:"100%"}}
                />
                <TextField id="outlined-basic" 
                  label="Correo electrónico" 
                  variant="outlined"
                  sx={{ m:2, width:"100%"}}
                />
                <TextField id="outlined-basic" 
                  label="N° de teléfono" 
                  variant="outlined"
                  sx={{ m:2, width:"100%"}}
                />
                <div className="register-card_container-name">
                  <TextField id="outlined-basic" 
                    label="Nombres" 
                    variant="outlined"
                    sx={{ mr:1, width:"100%"}}
                  />
                  <TextField id="outlined-basic" 
                    label="Apellidos" 
                    variant="outlined"
                    sx={{ ml:1, width:"100%"}}
                   />
                </div>
                <TextField id="outlined-basic" 
                  label="Centro Veterinario" 
                  variant="outlined"
                  sx={{ m:2, width:"100%"}}
                />
                <TextField id="outlined-basic" 
                  label="Provincia" 
                  variant="outlined"
                  sx={{ m:2, width:"100%"}}
                />
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Checkbox defaultChecked />
                  <p>Acepto los términos y condiciones</p>
                </Grid>
                <Button variant="contained" sx={{ mt:3, width: "60%"}}>Solicitar Acceso</Button> 
            </FormControl>
          </Card>
        </Grid> 
      </Grid>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
