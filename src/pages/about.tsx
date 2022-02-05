import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Navbar, Footer, SpaceBetweenWrapper } from '../components';

import logo from '../../media/logo.png';
import { FormattedMessage } from 'react-intl';

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Про нас | Chargefy</title>
				<meta
					name='description'
					content='Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SpaceBetweenWrapper>
				<main>
					<Navbar />

					{/*

						Ми новий магазин. Наша ціль - бути корисними для наших покупців, надавати якісні
						товари разом з зручним сервісом. Ми надаємо гарантію, тому що вважаємо, що
						онлайн-шопінг має бути максимально безпечним. Ми допогаємо знайти максимально
						якісні аксесуари для вашого телефону швидко та зручно.

					*/}

					<Container>
						<Box sx={{ py: '7rem' }}>
							<Grid container spacing={4}>
								<Grid item container xs={4} alignItems={'center'}>
									<Image src={logo} alt={'chargefy'} />
								</Grid>
								<Grid item xs={8}>
									<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
										<Box sx={{ typography: 'h4', fontWeight: 300 }}>
											<FormattedMessage id='about.title' />
										</Box>
										<Box sx={{ lineHeight: '2rem', mt: '3rem' }}>
											<FormattedMessage id='about.aboutText' />
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</main>

				<Footer />
			</SpaceBetweenWrapper>
		</>
	);
};

export default About;
