import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { WSwiper, SlideContent, Title, Text } from './Carousel.styles';

interface SlideProps {
  img: any,
  title: string,
  description: string,
}

interface CarouselProps {
  content: Array<SlideProps>
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel({ content }: CarouselProps) {
  return (
    <WSwiper
      navigation={true}
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      pagination={{ dynamicBullets: true }}
    >
      {
        content.map((slide: SlideProps, index: number) => (
          <SwiperSlide
            key={index}
          >
            <SlideContent>
              <Grid container spacing={2}>
                <Grid item container xs={6} direction={'column'} justifyContent={'center'}>
                  <Title>
                    {slide.title}
                  </Title>
                  <Text>
                    {slide.description}
                  </Text>
                </Grid>
                <Grid item container xs={6} justifyContent={'center'}>
                  <Image src={slide.img}/>
                </Grid>
              </Grid>
            </SlideContent>
          </SwiperSlide>
        ))
      }
    </WSwiper>
  );
}
