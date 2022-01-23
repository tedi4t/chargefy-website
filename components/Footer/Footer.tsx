import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/LocalPhone';

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
	href?: string;
}

export default function Footer() {
	const socials: Array<Social> = [
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
			href: 'https://telegram.com',
		},
		{
			icon: <PhoneIcon />,
			text: '+38 063 039 90 93',
		},
	];

	const pages: Array<{ name: string; href: string }> = [
		{
			name: 'Домашня сторінка',
			href: '/',
		},
		{
			name: 'Продукти',
			href: '/products',
		},
		{
			name: 'Про нас',
			href: '/about',
		},
		{
			name: 'Контакти',
			href: '/contacts',
		},
	];

	const helpPages: Array<{ name: string; href: string }> = [
		{
			name: 'Доставка',
			href: '/delivery',
		},
		{
			name: 'Повернення',
			href: '/return',
		},
		{
			name: 'Запитання',
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
										<Image src={Logo} alt={'безпровідна зарядка'} />
									</LogoWrapper>
								</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' } }}>
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
													{social.href ? (
														<Link href={social.href}>
															<a>{social.text}</a>
														</Link>
													) : (
														<>{social.text}</>
													)}
												</Box>
											</HighlightGrid>
										))}
									</Column>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Title>сторінки</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' } }}>
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
								<Title>допомога</Title>
								<Box sx={{ display: { sm: 'block', md: 'none' } }}>
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
						<Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
													{social.href ? (
														<Link href={social.href}>
															<a>{social.text}</a>
														</Link>
													) : (
														<>{social.text}</>
													)}
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
