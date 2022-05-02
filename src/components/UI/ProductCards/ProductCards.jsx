import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./ProductCards.css";
export const ProductCards = ({ img, alt, title, text }) => {
  return (
    <Card className="product-cards">
      <CardActionArea>
        <CardMedia component="img" height="auto" image={img} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
