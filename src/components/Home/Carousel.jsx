import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,
{
  Pagination,
  Navigation,
  Autoplay
} from 'swiper';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import { Button, CardActionArea, CardActions } from '@mui/material';

import fisrt_product from '../../assets/images/image-slider/working-project-sl-1.png'
import second_product from '../../assets/images/image-slider/working-project-sl-2.png'

import './Sales.css';

// install Swiper modules

SwiperCore.use([Pagination, Navigation, Autoplay ]);

const Carousel = () => {
  return (
    <Swiper
        // slidesPerView={1}
        // spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // autoplay={{
        //   "delay": 2500,
        //   "disableOnInteraction": false
        // }}
        navigation={true}
        breakpoints={{
          "320": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView":4,
            "spaceBetween": 40
          },
          // "1024": {
          //   "slidesPerView": 5,
          //   "spaceBetween": 50
          // }
        }}
    >
      <SwiperSlide>
      <Link to="/producto">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fisrt_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vermivet Solución Oral 1l
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antiparasitario Interno, recomendado para aves, bovino y porcino.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={second_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Baytril Uno 100 Ml
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antibiotico, recomendado para bovino, caprino, ovino y porcino
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fisrt_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vermivet Solución Oral 1l
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antiparasitario Interno, recomendado para aves, bovino y porcino.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={second_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Baytril Uno 100 Ml
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antibiotico, recomendado para bovino, caprino, ovino y porcino
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fisrt_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vermivet Solución Oral 1l
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antiparasitario Interno, recomendado para aves, bovino y porcino.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={second_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Baytril Uno 100 Ml
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antibiotico, recomendado para bovino, caprino, ovino y porcino
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fisrt_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vermivet Solución Oral 1l
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antiparasitario Interno, recomendado para aves, bovino y porcino.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={second_product}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Baytril Uno 100 Ml
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Antibiotico, recomendado para bovino, caprino, ovino y porcino
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>

    </Swiper>
  );
};

export default Carousel;