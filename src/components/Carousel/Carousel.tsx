import React from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { WSwiper } from './Carousel.styles';

interface CarouselProps<T> {
	content: Array<T>;
	Slide: (slideContent: T) => JSX.Element;
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel<T>({ content, Slide }: CarouselProps<T>) {
	return (
		<WSwiper
			navigation={true}
			autoplay={{
				delay: 150000,
				disableOnInteraction: false,
			}}
			pagination={{ dynamicBullets: true }}
		>
			{content.map((slideContent: T, index: number) => (
				<SwiperSlide key={index}>
					<Slide {...slideContent} />
				</SwiperSlide>
			))}
		</WSwiper>
	);
}
