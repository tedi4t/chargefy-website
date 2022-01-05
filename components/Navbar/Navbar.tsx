import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { WAppBar, LogoWrapper, WAvatar, PageName } from './Navbar.styles';

import Logo from '../../media/logo.png';

export default function Navbar () {
  const pages: Array<{ name: string, href: string }> = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Products',
      href: '/products'
    },
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Contacts',
      href: '/contacts'
    },
  ];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <WAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={'/'}>
            <a>
              <LogoWrapper
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Image src={Logo} />
              </LogoWrapper>
            </a>
          </Link>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.href}>
                    <a>
                      <Typography textAlign="center">
                        {page.name}
                      </Typography>
                    </a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent={'center'}>
            <LogoWrapper>
              <Link href={'/'}>
                <a>
                  <Image src={Logo} />
                </a>
              </Link>
            </LogoWrapper>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent={'center'}>
            {pages.map((page) => (
              <PageName
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 5, color: 'black', display: 'block' }}
                className={router.pathname === page.href ? 'active' : ''}
                key={page.name}
              >
                <Link
                  key={page.name}
                  href={page.href}
                >
                  <a>
                    {page.name}
                  </a>
                </Link>
              </PageName>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <WAvatar sx={{ background: '#efefef', color: '#000' }}>D</WAvatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </WAppBar>
  );
};
