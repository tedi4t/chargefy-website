import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
	Wrapper,
	InsideWrapper,
	Title,
	Column,
	LogoWrapper,
	LinkWrapper,
	FooterText,
	Highlight,
	HighlightGrid,
} from './Footer.styles';

import Logo from '../../media/logo.png';

interface Social {
	icon: JSX.Element;
	text: string;
	href: string;
}

export default function Footer() {
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
	];

	const pages: Array<{ name: string; href: string }> = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Products',
			href: '/products',
		},
		{
			name: 'About Us',
			href: '/about',
		},
		{
			name: 'Contacts',
			href: '/contacts',
		},
	];

	const helpPages: Array<{ name: string; href: string }> = [
		{
			name: 'Delivery',
			href: '/delivery',
		},
		{
			name: 'Return',
			href: '/return',
		},
		{
			name: 'FAQ',
			href: '/faq',
		},
	];

	return (
		<footer>
			<Wrapper>
				<Container>
					<InsideWrapper>
						<Grid container>
							<Grid item xs={12} md={4}>
								<Title>
									<LogoWrapper>
										<Image src={Logo} />
									</LogoWrapper>
								</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' }}}>
									<Column>
										{socials.map((social: Social) => (
											<HighlightGrid
												container
												alignItems={'center'}
												sx={{ my: '1rem' }}
												key={social.text}
											>
												{social.icon}
												<Box sx={{ ml: '1rem' }}>
													<Link href={social.href}>
														<a>{social.text}</a>
													</Link>
												</Box>
											</HighlightGrid>
										))}
									</Column>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Title>links</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' }}}>
									<Column>
										{pages.map(page => (
											<LinkWrapper key={page.name}>
												<Highlight>
													<Link href={page.href}>
														<a>{page.name}</a>
													</Link>
												</Highlight>
											</LinkWrapper>
										))}
									</Column>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Title>help</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' }}}>
									<Column>
										{helpPages.map(page => (
											<LinkWrapper key={page.name}>
												<Highlight>
													<Link href={page.href}>
														<a>{page.name}</a>
													</Link>
												</Highlight>
											</LinkWrapper>
										))}
									</Column>
								</Box>
							</Grid>
						</Grid>
						<Box sx={{ display: { xs: 'none', md: 'block' }}}>
							<Grid container>
								<Grid item xs={12} md={4}>
									<Column>
										{socials.map((social: Social) => (
											<HighlightGrid
												container
												alignItems={'center'}
												sx={{ my: '1rem' }}
												key={social.text}
											>
												{social.icon}
												<Box sx={{ ml: '1rem' }}>
													<Link href={social.href}>
														<a>{social.text}</a>
													</Link>
												</Box>
											</HighlightGrid>
										))}
									</Column>
								</Grid>
								<Grid item xs={12} md={4}>
									<Column>
										{pages.map(page => (
											<LinkWrapper key={page.name}>
												<Highlight>
													<Link href={page.href}>
														<a>{page.name}</a>
													</Link>
												</Highlight>
											</LinkWrapper>
										))}
									</Column>
								</Grid>
								<Grid item xs={12} md={4}>
									<Column>
										{helpPages.map(page => (
											<LinkWrapper key={page.name}>
												<Highlight>
													<Link href={page.href}>
														<a>{page.name}</a>
													</Link>
												</Highlight>
											</LinkWrapper>
										))}
									</Column>
								</Grid>
							</Grid>
						</Box>
					</InsideWrapper>
					<FooterText>©Copyright. Designed And Developed By Chargefy</FooterText>
				</Container>
			</Wrapper>
		</footer>
	);
}
