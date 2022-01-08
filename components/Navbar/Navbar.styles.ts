import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const WAppBar = styled(AppBar)`
	background: #fff;
`;
WAppBar.defaultProps = {
	position: 'fixed',
};

export const LogoWrapper = styled(Box)`
	width: 150px;

	img {
		width: 100%;
	}
`;

export const WAvatar = styled(Avatar)`
	background: #efefef;
	color: #000;
	font-weight: 200;
`;

export const PageName = styled(Typography)`
	&.active {
		color: #e99c2e;
	}
`;

export const WShoppingCartIcon = styled(ShoppingCartIcon)`
	color: #000;
	margin-right: 1.5rem;
	transition-duration: 0.2s;
	transition-property: color;

	&:hover {
		color: #e99c2e;
	}
`;
