import * as React from "react";
import Footer from "../components/UI/Footer/Footer";
import Navbar from "../components/UI/Navbar/Navbar";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ListItemText from "@mui/material/ListItemText";
import Sales from "../components/Home/Sales";
import first_product from "../assets/images/image-slider/working-project-sl-1.png";
import "./ProductDetail.css";

import { height, padding } from "@mui/system";
import Carrito from "./Carrito";
import Carousel from "../components/Home/Carousel";
const ProductDetails = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="content">
        <h1>Detalles productos</h1>
        <Card
          sx={{ height: "auto", maxWidth: "auto", margin: "125 25 100 25" }} className="card-container "
        >
          <CardContent>
            <Grid container>
              <Grid xs={6} className="product-image-container">
                <CardActionArea style={{height: "100%"}}>
                   <img src={first_product} id="product-image"></img>
                </CardActionArea>
              </Grid>
              <Grid xs={6} className="product-content-container">
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Vermivet Solución Oral 1L
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Antiparasitario Interno, recomendado para aves, bovino y
                    porcino.
                  </Typography>
                </CardContent>
                {/* <Rating
                  name="simple-controlled"
                  value={3}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                /> */}
                <br />
                <Typography className="product-detail-text" variant="h7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas odio felis, pellentesque eu urna mollis, dignissim
                  consectetur tortor. Vestibulum sed imperdiet odio. Vestibulum
                  eu nunc sed velit volutpat venenatis. Praesent et sodales
                  orci. Pellentesque luctus orci non maximus varius. Etiam ut
                  orci ante. Suspendisse imperdiet tempus sem, in facilisis
                  felis suscipit in. Integer ac lacinia leo.
                </Typography>
                <br />
                <br />
                <br />
                <Button variant="contained"><Carrito/></Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card />
        <Grid container>
          <Grid xs={15} className="description-container">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to="/">
                Resumen
              </Link>
              <Link underline="hover" color="inherit" to="">
                Observaciones
              </Link>
              <Typography color="text.primary"></Typography>
            </Breadcrumbs>
            <Typography gutterBottom variant="h4" component="div">
                      Resumen del producto
                    </Typography>
              <Typography className="product-detail-text" variant="h7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas odio felis, pellentesque eu urna mollis, dignissim
                  consectetur tortor. Vestibulum sed imperdiet odio. Vestibulum
                  eu nunc sed velit volutpat venenatis. Praesent et sodales
                  orci. Pellentesque luctus orci non maximus varius. Etiam ut
                  orci ante. Suspendisse imperdiet tempus sem, in facilisis
                  felis suscipit in. Integer ac lacinia leo.
                </Typography>
            <div className="list">
              {" "}
              <br />
              <ListItemText component="li" primary="Observation 1" /> <br />
              <ListItemText component="li" primary="Observation 2" /> <br />
              <ListItemText component="li" primary="Observation 3" /> <br />
            </div>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h3" component="div">
                    Productos destacados
                  </Typography>
        <Carousel/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
