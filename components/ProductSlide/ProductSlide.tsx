import Image from 'next/image';
import Box from '@mui/material/Box';

import { ProductSlideProps } from '.';

export default function (props: ProductSlideProps) {
	return (
		<Box height={'100%'} display={'flex'} alignItems={'center'}>
			<Box sx={{ mx: '5rem', my: '4rem' }} >
				<Image src={props.url} width={props.width} height={props.height} />
			</Box>
		</Box>
	);
}
