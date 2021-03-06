import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/LocalPhone';

import { Navbar, Footer, SpaceBetweenWrapper } from '../components';
import { HighlightGrid } from '../components/Footer';

import logo from '../../media/logo.png';
import { event } from '../utils/gtag';

const Contacts: NextPage = () => {
	const intl = useIntl();

	const socials = [
		{
			icon: <FacebookIcon />,
			text: 'Facebook',
			href: 'https://www.facebook.com/Chargefy-107689585112679/',
		},
		{
			icon: <InstagramIcon />,
			text: 'Instagram',
			href: 'https://www.instagram.com/chargefy/',
		},
		{
			icon: <TelegramIcon />,
			text: 'Telegram',
			href: 'https://t.me/chargefy',
			cb: () => {
				event({
					action: 'purchase',
					category: 'ecommerce',
					label: 'purchase',
					value: 300,
					currency: 'UAH',
				});
			},
		},
		{
			icon: <MailIcon />,
			text: 'chargefy.mail@gmail.com',
		},
		{
			icon: <PhoneIcon />,
			text: '+38 073 857 69 46',
			href: 'tel:+380738576946',
			cb: () => {
				event({
					action: 'purchase',
					category: 'ecommerce',
					label: 'purchase',
					value: 300,
					currency: 'UAH',
				});
			},
		},
	];

	return (
		<>
			<Head>
				<title>{intl.formatMessage({ id: 'contacts.title' })}</title>
				<meta name='description' content={intl.formatMessage({ id: 'contacts.description' })} />
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
											<FormattedMessage id='contacts.mainBlock.title' />
										</Box>
										<Box sx={{ mt: '3rem' }}>
											{socials.map(social => (
												<Box key={social.text}>
													{social.href ? (
														<Link href={social.href}>
															<a>
																<Box sx={{ my: '1rem' }} onClick={social.cb}>
																	<HighlightGrid container alignItems={'center'}>
																		{social.icon}
																		<Box sx={{ ml: '1rem' }}>{social.text}</Box>
																	</HighlightGrid>
																</Box>
															</a>
														</Link>
													) : (
														<Box sx={{ my: '1rem' }}>
															<HighlightGrid container alignItems={'center'}>
																{social.icon}
																<Box sx={{ ml: '1rem' }}>{social.text}</Box>
															</HighlightGrid>
														</Box>
													)}
												</Box>
											))}
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

export default Contacts;
