import React, { useState } from "react";

import {
  Grid, 
  TextField, 
  FormControl, 
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  Slider 
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ItemData } from "./ItemData";

import "./Products.css";
import { ProductCards } from "../UI/ProductCards/ProductCards";

const Products = () => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([0]);
  const [range, setRange] = useState([20, 37]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  const handleRange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <div className="products" maxWidth="xxl">
      <Grid container className="products-container">
        <Grid xs={4}>
          <h1>Filtros</h1>
          <FormControl sx={{ m:5 , alignItems: 'center'}} className="prodcuts-filter">
            <TextField placeholder="Buscar..."  sx={{ m:2, width:"80%"}} />
            <Typography sx={{ textAlign: 'left',  m:2, width:"80%" }}>Categorias</Typography>
            <Accordion sx={{ mx:2, width:"80%"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
              className="product-dropdown"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', textAlign: 'left' }} className="products-filter_titles">
                   Medicamentos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ mx:2, width:"80%"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              className="product-dropdown"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', textAlign: 'left'}} className="products-filter_titles">
                   Higiene y Cuidado
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ mx:2, width:"80%"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              className="product-dropdown"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', textAlign: 'left' }} className="products-filter_titles">
                   Alimentación
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ mx:2, width:"80%"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
              className="product-dropdown"            
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '100%', textAlign: 'left'}} className="products-filter_titles">
                   Fungibles
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider sx={{ border: 1, mt:4, width:"80%"}} className="filter-divider" />
            <Typography sx={{ textAlign: 'left',  m:2, width:"80%" }}>Marcas</Typography>
            <List sx={{ mx:2, width:"90%"}}>
              <ListItem>
                <ListItemButton role={undefined} dense>
                  <Checkbox
                    edge="start"
                  />
                  Leonvet 1
                </ListItemButton>
              </ListItem>
              <Divider sx={{ border:1, width:"90%", mx:2}} />
              <ListItem>
                <ListItemButton role={undefined} dense>
                  <Checkbox
                    edge="start"
                  />
                  Leonvet 2
                </ListItemButton>
              </ListItem>
              <Divider sx={{ border:1, width:"90%", mx:2}} />
              <ListItem>
                <ListItemButton role={undefined} dense>
                  <Checkbox
                    edge="start"
                  />
                  Leonvet 3
                </ListItemButton>
              </ListItem>
            </List>
            <Divider sx={{ border: 1, mt:4, width:"80%"}} className="filter-divider" />
            <Typography sx={{ textAlign: 'left',  m:2, width:"80%" }}>Precio</Typography>
            <Slider sx={{  width:"80%"}}
              getAriaLabel={() => 'Price range'}
              value={range}
              onChange={handleRange}
              valueLabelDisplay="auto"
              >
            </Slider>
          </FormControl>
        </Grid>
        <Grid xs={8}>
          <h1>Productos</h1>
          <Grid sx={{mb:5}} container spacing={2}>
            {ItemData.map(({ img, title, alt, text }) => (
              <Grid item xs={4}>
                <ProductCards img={img} title={title} alt={alt} text={text} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default Products;
