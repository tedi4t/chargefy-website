import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Navbar, Paper, Footer, InfoTitle } from '../components';

import banner from '../../media/banner/main.jpeg';
import logo from '../../media/logo.png';
import { FormattedMessage, useIntl } from 'react-intl';

const Return: NextPage = () => {
	const intl = useIntl();

	return (
		<div>
			<Head>
				<title>{intl.formatMessage({ id: 'return.title' })}</title>
				<meta name='description' content={intl.formatMessage({ id: 'return.description' })} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'Повернення'} />} />

				<Container>
					<Box sx={{ my: '5rem' }}>
						<Grid container spacing={4}>
							<Grid item container xs={4} alignItems={'center'}>
								<Image src={logo} alt={'chargefy'} />
							</Grid>
							<Grid item xs={8}>
								<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
									<Box sx={{ typography: 'h4', fontWeight: 300 }}>
										<FormattedMessage id='return.mainBlock.title' />
									</Box>
									<Box sx={{ lineHeight: '2rem', mt: '3rem' }}>
										<FormattedMessage id='return.mainBlock.description' />
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

export default Return;
