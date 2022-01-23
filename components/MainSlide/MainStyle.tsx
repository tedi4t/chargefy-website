import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { SlideContent, Title, Text, ImageContainer, ContentContainer } from './MainStyle.styles';
import { SlideProps } from '.';

export default function MainStyle(slide: SlideProps) {
	return (
		<Link href={`/products/${slide.id}`}>
			<a>
				<SlideContent>
					<ContentContainer>
						<Grid container direction={'column'} justifyContent={'center'}>
							<Title>
								<Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>{slide.title}</Box>
							</Title>
							<Box sx={{ display: { xs: 'none', md: 'block' } }}>
								<Text>{slide.description}</Text>
							</Box>
						</Grid>
						<ImageContainer>
							{typeof window !== 'undefined' ? (
								window.innerWidth > 768 ? (
									<Grid container alignItems={'center'} justifyContent={'center'}>
										<Image
											src={slide.img.url}
											width={slide.img.width}
											height={slide.img.height}
											alt={slide.img.alternativeText}
										/>
									</Grid>
								) : (
									<Image src={slide.img.url} alt={'зарядка'} layout={'fill'} objectFit='contain' />
								)
							) : (
								<></>
							)}
						</ImageContainer>
					</ContentContainer>
				</SlideContent>
			</a>
		</Link>
	);
}
