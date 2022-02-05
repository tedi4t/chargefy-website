import Image from 'next/image';
import Box from '@mui/material/Box';

import { ProductSlideProps } from './index';

export default function ProductSlide(props: ProductSlideProps) {
	return (
		<Box height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<Box sx={{ mx: { xs: '3rem', md: '5rem' }, my: { xs: '2rem', md: '4rem' } }}>
				<Image
					src={props.url}
					width={props.width}
					height={props.height}
					alt={props.alternativeText}
				/>
			</Box>
		</Box>
	);
}
