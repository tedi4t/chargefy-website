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

import Logo from '../../../media/logo.png';
import { event } from '../../utils/gtag';
import { useRouter } from 'next/router';

interface Social {
	icon: JSX.Element;
	text: string;
	href?: string;
	cb?: () => void;
}

export default function Footer() {
	const router = useRouter();
	const isUkLocale = router.locale === 'uk';

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
			icon: <PhoneIcon />,
			text: '+38 063 039 90 93',
			href: 'tel:+380630399093',
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

	const pages: Array<{ name: string; href: string }> = [
		{
			name: isUkLocale ? 'Домашня сторінка' : 'Домашняя страница',
			href: '/',
		},
		{
			name: isUkLocale ? 'Товари' : 'Товары',
			href: '/products',
		},
		{
			name: isUkLocale ? 'Про нас' : 'О нас',
			href: '/about',
		},
		{
			name: isUkLocale ? 'Контакти' : 'Контакты',
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
		// {
		// 	name: 'Запитання',
		// 	href: '/faq',
		// },
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
												<Box sx={{ ml: '1rem' }} onClick={social.cb}>
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
