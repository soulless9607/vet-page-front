import React from 'react'
import Footer from '../components/UI/Footer/Footer';
  import Navbar from '../components/UI/Navbar/Navbar';
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import Image3 from '../assets/images/noticias/especies-silvestres-como-animales-domesticos.jpg'
import Image1 from '../assets/images/background-section/dog.jpg'
import Image2 from '../assets/images/noticias/2021-08-17-perros-hipoalergenicos.jpg'
import './Actuality.css'
import { padding } from '@mui/system';

const Actuality = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="cards-container-actuality">

        <Card className="card-actuality" sx={{ width: 350, height: "600px"}}>
          <CardContent className="actuality-container">
          <Typography variant="h4" align="center">
                Title one
            </Typography>
            <br/>

          <Typography variant="h7" align="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <br/>
            <Typography variant="subtitle1" align="center" component="div">
              Cristina V.
              <br />
              Vet and Vet
            </Typography>
            <img id='image1' src={Image1} alt="Image1" style={{width:"460px", height:"auto", margin:"50px 10px -25px 10px"}}/>
          </CardContent>
        </Card>
        <Card className="card-actuality" sx={{  width: 350, height: "600px"}}>
          <CardContent className="actuality-container">
          <Typography variant="h4" align="center">
                Title two
            </Typography>
            <br/>
            <Typography variant="h7" align="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <br/>
            <Typography variant="subtitle1" align="center" component="div">
              Camilo G.
              <br />
              Vet and Vet
            </Typography>
            <img id='image2' src={Image2} alt="Image2" style={{width:"460px", height:"auto", margin:"50px 10px -25px 10px "}}/>
          </CardContent>
        </Card>
        <Card className="card-actuality" sx={{  width: 350, height: "600px"}}>
          <CardContent className="actuality-container">
          <Typography variant="h4" align="center">
                Title three
            </Typography>
            <br/>
            <Typography variant="h7" align="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <br/>
            <Typography variant="subtitle1" align="center" component="div">
              Andrea S.
              <br />
              Vet and Vet
            </Typography>
            <img id='image3' src={Image3} alt="Image3" style={{width:"460px", height:"auto", margin:"50px 10px -35px 10px "}}/>
          </CardContent>
        </Card>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
};

export default Actuality;

