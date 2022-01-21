import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Navbar, Paper, Footer, InfoTitle } from '../components';

import banner from '../media/banner/main.jpeg';
import logo from '../media/logo.png';

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'about'} />} />

				<Container>
					<Box sx={{ my: '5rem' }}>
						<Grid container spacing={4}>
							<Grid item container xs={4} alignItems={'center'}>
								<Image src={logo} alt={"chargefy"} />
							</Grid>
							<Grid item xs={8}>
								<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
									<Box sx={{ typography: 'h4', fontWeight: 300 }}>Our Story</Box>
									<Box sx={{ lineHeight: '2rem', mt: '3rem' }}>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
										adipisci aliquid atque autem, corporis, earum eligendi incidunt laudantium
										molestiae nulla pariatur placeat quaerat qui quia quod sed sint tempore ullam
										unde. Amet animi delectus deserunt doloremque doloribus error esse ex id iste
										maiores maxime necessitatibus obcaecati odio quae quasi quibusdam reiciendis
										totam, velit voluptas, voluptatum? Dolor enim fugit laboriosam magni, odio odit
										perferendis praesentium recusandae temporibus voluptatem. Animi atque dolorem
										eius, enim eum expedita in maiores maxime minima nisi officiis quam repellat
										rerum sapiente sit, veritatis voluptatibus. Aperiam, soluta.
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</main>

			<Footer />
		</div>
	);
};

export default About;
