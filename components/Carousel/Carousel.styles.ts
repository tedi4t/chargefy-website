import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';

export const WSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  
  .swiper-pagination-bullet-active {
    background: #e99c2e !important;
  }

  .swiper-button-prev::after, .swiper-button-next::after {
    color: #e99c2e !important;
  }
`;
