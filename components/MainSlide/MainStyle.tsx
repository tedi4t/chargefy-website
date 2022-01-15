import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { SlideContent, Title, Text, GridContainer } from './MainStyle.styles';
import { SlideProps } from '.';

export default function MainStyle(slide: SlideProps) {
	return (
		<SlideContent>
			<GridContainer container spacing={2}>
				<Grid item container xs={12} md={6} direction={'column'} justifyContent={'center'} >
					<Title>
						<Box sx={{ textAlign: { xs: 'center', md: 'left' }}}>
							{slide.title}
						</Box>
					</Title>
					<Box sx={{ display: { xs: 'none', md: 'block' }}}>
						<Text>{slide.description}</Text>
					</Box>
				</Grid>
				<Grid item container xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
					<Image src={slide.img} />
				</Grid>
			</GridContainer>
		</SlideContent>
	);
}
