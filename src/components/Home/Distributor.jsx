import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

import mark_1 from '../../assets/images/marcas/b-braun.gif'
import mark_2 from '../../assets/images/marcas/boehringer.gif'
import mark_3 from '../../assets/images/marcas/fatro.gif'
import mark_4 from '../../assets/images/marcas/leti.gif'
import mark_5 from '../../assets/images/marcas/msd.gif'

import Grid from '@mui/material/Grid';

import './Distributor.css';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const Distributor = () => {
  return (
    <div className="distributor">
      <Grid container>
        <Grid xs={12}  sx={{ height: 200}}>
          <div className='distributor-title'>
            <h1>Distribuidores de productos zoosanitarios</h1>
          </div>
        </Grid>
        <Grid xs={12}  sx={{ height: 400}}>
          <div className='distributor-slider'>
            <Swiper spaceBetween={10} centeredSlides={true} modules={[Navigation, Pagination]}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
              <SwiperSlide>
                <img src={mark_1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mark_2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mark_3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mark_4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mark_5} alt="" />
              </SwiperSlide>

            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Distributor;