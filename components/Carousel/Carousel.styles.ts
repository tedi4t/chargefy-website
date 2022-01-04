import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';

export const WSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  background: #efefef;
  height: 80vh;
  
  .swiper-pagination-bullet-active {
    background: #e99c2e !important;
  }

  .swiper-button-prev::after, .swiper-button-next::after {
    color: #e99c2e !important;
  }
`;

export const SlideContent = styled.div`
  height: 100%;
  padding: 5rem 5rem 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.9rem;
`;