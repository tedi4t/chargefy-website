import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
	WAppBar,
	LogoWrapper,
	PageName,
	WShoppingCartIcon,
	GridFullHeight,
	GridMenuItem,
} from './Navbar.styles';

import Logo from '../../media/logo.png';
import { useContext, useState } from 'react';
import { shoppingCartContext } from '../../contexts/shoppingCart';
import { Overlay } from '../index';
import Typography from '@mui/material/Typography';

export default function Navbar() {
	const [shoppingCart] = useContext(shoppingCartContext);
	const pages: Array<{ name: string; href: string }> = [
		{
			name: 'Домашня сторінка',
			href: '/',
		},
		{
			name: 'Товари',
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
	// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	const router = useRouter();

	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = () => {
		setIsMenuOpened(true);
	};
	// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	const handleCloseNavMenu = () => {
		setIsMenuOpened(false);
	};

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	return (
		<WAppBar>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Link href={'/'}>
						<a>
							<LogoWrapper sx={{ display: { xs: 'none', md: 'flex' } }}>
								<Image src={Logo} alt={'зарядка'} />
							</LogoWrapper>
						</a>
					</Link>

					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton size='large' onClick={handleOpenNavMenu}>
							<MenuIcon />
						</IconButton>
						<Overlay opened={isMenuOpened} onClose={handleCloseNavMenu}>
							<GridFullHeight container>
								{pages.map(page => (
									<GridMenuItem key={page.href}>
										<Link href={page.href}>
											<a>
												<Typography
													color={'primary'}
													fontWeight={'light'}
													fontSize={'1.2rem'}
													textAlign={'center'}
												>
													{page.name}
												</Typography>
											</a>
										</Link>
									</GridMenuItem>
								))}
							</GridFullHeight>
						</Overlay>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent={'center'}>
						<LogoWrapper>
							<Link href={'/'}>
								<a>
									<Image src={Logo} alt={'тримач для телефону'} />
								</a>
							</Link>
						</LogoWrapper>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent={'center'}>
						{pages.map(page => (
							<PageName
								sx={{ my: 2, mx: 5, color: 'black', display: 'block' }}
								className={router.pathname === page.href ? 'active' : ''}
								key={page.name}
							>
								<Link key={page.name} href={page.href}>
									<a>{page.name}</a>
								</Link>
							</PageName>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Grid container alignItems={'center'}>
							{shoppingCart?.length && (
								<Link href={'/shopping-cart'}>
									<a>
										<WShoppingCartIcon />
									</a>
								</Link>
							)}
							{/*<Tooltip title='Open settings'>*/}
							{/*	<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
							{/*		<WAvatar sx={{ background: '#efefef', color: '#000' }}>D</WAvatar>*/}
							{/*	</IconButton>*/}
							{/*</Tooltip>*/}
						</Grid>
						{/*<Menu*/}
						{/*	sx={{ mt: '45px' }}*/}
						{/*	id='menu-appbar'*/}
						{/*	anchorEl={anchorElUser}*/}
						{/*	anchorOrigin={{*/}
						{/*		vertical: 'top',*/}
						{/*		horizontal: 'right',*/}
						{/*	}}*/}
						{/*	keepMounted*/}
						{/*	transformOrigin={{*/}
						{/*		vertical: 'top',*/}
						{/*		horizontal: 'right',*/}
						{/*	}}*/}
						{/*	open={Boolean(anchorElUser)}*/}
						{/*	onClose={handleCloseUserMenu}*/}
						{/*>*/}
						{/*	{settings.map(setting => (*/}
						{/*		<MenuItem key={setting} onClick={handleCloseNavMenu}>*/}
						{/*			<Typography textAlign='center'>{setting}</Typography>*/}
						{/*		</MenuItem>*/}
						{/*	))}*/}
						{/*</Menu>*/}
					</Box>
				</Toolbar>
			</Container>
		</WAppBar>
	);
}
