import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { SlideContent, Title, Text, GridContainer, ImageWrapper } from './MainStyle.styles';
import { SlideProps } from '.';

export default function MainStyle(slide: SlideProps) {
	return (
		<Link href={`/products/${slide.id}`}>
			<a>
				<SlideContent>
					<GridContainer container spacing={2}>
						<Grid item container xs={12} md={6} direction={'column'} justifyContent={'center'}>
							<Title>
								<Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>{slide.title}</Box>
							</Title>
							<Box sx={{ display: { xs: 'none', md: 'block' } }}>
								<Text>{slide.description}</Text>
							</Box>
						</Grid>
						<Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
							<ImageWrapper>
								<Box sx={{ display: { xs: 'block', md: 'none' }}}>
									<Image
										src={slide.img.url}
										width={slide.img.width}
										height={slide.img.height}
									/>
								</Box>

								<Box sx={{ display: { xs: 'none', md: 'block' }}}>
									<Image
										src={slide.img.url}
										width={slide.img.width}
										height={slide.img.height}
										layout='fill'
										objectFit='contain'
									/>
								</Box>
							</ImageWrapper>
						</Grid>
					</GridContainer>
				</SlideContent>
			</a>
		</Link>
	);
}
