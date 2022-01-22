import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';

import { Navbar, Paper, Footer, InfoTitle } from '../components';
import { HighlightGrid } from '../components/Footer';

import banner from '../media/banner/main.jpeg';
import logo from '../media/logo.png';

const Contacts: NextPage = () => {
	const socials = [
		{
			icon: <FacebookIcon />,
			text: 'Facebook',
			href: 'https://facebook.com',
		},
		{
			icon: <InstagramIcon />,
			text: 'Instagram',
			href: 'https://instagram.com',
		},
		{
			icon: <TelegramIcon />,
			text: 'Telegram',
			href: 'https://telegram.com',
		},
		{
			icon: <MailIcon />,
			text: 'chargefy.mail@gmail.com',
		},
	];

	return (
		<div>
			<Head>
				<title>Автомобільний тримач | Chargefy</title>
				<meta name='description' content='Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'contact us'} />} />

				<Container>
					<Box sx={{ my: '5rem' }}>
						<Grid container spacing={4}>
							<Grid item container xs={4} alignItems={'center'}>
								<Image src={logo} alt={'chargefy'} />
							</Grid>
							<Grid item xs={8}>
								<Box sx={{ mx: '1.5rem', fontSize: '1rem', lineHeight: '2rem', fontWeight: 300 }}>
									<Box sx={{ typography: 'h4', fontWeight: 300 }}>Contact Us</Box>
									<Box sx={{ mt: '3rem' }}>
										{socials.map(social => (
											<Box key={social.text}>
												{social.href ? (
													<Link href={social.href}>
														<a>
															<Box sx={{ my: '1rem' }}>
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
		</div>
	);
};

export default Contacts;
