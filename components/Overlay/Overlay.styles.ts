import styled from '@emotion/styled';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';

export const Overlay = styled(Backdrop)`
	z-index: 1200;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: ${({ theme }) => theme.palette.primary.light};
`;

export const WButton = styled(Button)`
	padding: 0;
	border-width: 0;
	min-width: 0;
`;