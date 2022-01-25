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
				<title>Доставка | Chargefy</title>
				<meta
					name='description'
					content='Безпровідна автомобільна зарядка швидко зарядить ваш телефон а також буде надійно тримати його у дорозі.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'доставка'} />} />

				<Container>
					<Box sx={{ my: '5rem' }}>
						<Grid container spacing={4}>
							<Grid item container xs={4} alignItems={'center'}>
								<Image src={logo} alt={'chargefy'} />
							</Grid>
							<Grid item xs={8}>
								<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
									<Box sx={{ typography: 'h4', fontWeight: 300 }}>Доставка</Box>
									<Box sx={{ lineHeight: '2rem', mt: '3rem' }}>
										Доставку здійснюємо через поштовий сервіс «Нова Пошта». Пріоритетною для нас є
										оплата через наложений платіж, адже так ви можете особисто переконатися в якості
										товару перед його оплатою, але також можлива оплата картою за Вашим бажанням.
										Також будемо раді відправити іншим сервісом доставки який Ви вкажете.
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
