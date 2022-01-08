import Image from 'next/image';
import Grid from '@mui/material/Grid';

import { SlideContent, Title, Text } from './MainStyle.styles';
import { SlideProps } from '.';

export default function (slide: SlideProps) {
	return (
		<SlideContent>
			<Grid container spacing={2}>
				<Grid item container xs={6} direction={'column'} justifyContent={'center'}>
					<Title>{slide.title}</Title>
					<Text>{slide.description}</Text>
				</Grid>
				<Grid item container xs={6} justifyContent={'center'}>
					<Image src={slide.img} />
				</Grid>
			</Grid>
		</SlideContent>
	);
}
