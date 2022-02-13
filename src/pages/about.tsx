import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Navbar, Footer, SpaceBetweenWrapper } from '../components';

import logo from '../../media/logo.png';

const About: NextPage = () => {
	const intl = useIntl();

	return (
		<>
			<Head>
				<title>{intl.formatMessage({ id: 'about.title' })}</title>
				<meta name='description' content={intl.formatMessage({ id: 'about.description' })} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SpaceBetweenWrapper>
				<main>
					<Navbar />
					<Container>
						<Box sx={{ py: '7rem' }}>
							<Grid container spacing={4}>
								<Grid item container xs={4} alignItems={'center'}>
									<Image src={logo} alt={'chargefy'} />
								</Grid>
								<Grid item xs={8}>
									<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
										<Box sx={{ typography: 'h4', fontWeight: 300 }}>
											<FormattedMessage id='about.mainBlock.title' />
										</Box>
										<Box sx={{ lineHeight: '2rem', mt: '3rem' }}>
											<FormattedMessage id='about.mainBlock.description' />
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
