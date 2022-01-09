import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const WButton = styled(Button)`
	height: 52px;
	width: 100%;
	background: #e99c2e;
	border: 3px solid #e99c2e;
	border-radius: 0;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 1.2rem;
	color: #fff;
	letter-spacing: 0.4rem;

	&:hover {
		background: #fff;
		color: #e99c2e;
	}
`;

export const QuantityButton = styled(Button)`
	width: 52px;
	height: 52px;
	min-width: 0;
	background: #e99c2e;
	border: 3px solid #e99c2e;
	border-radius: 0;
	color: #fff;

	&:hover {
		background: #fff;
		color: #e99c2e;
	}
`;

export const Quantity = styled(Typography)`
	font-size: 1.3rem;
	font-weight: 300;
	margin: 0 2rem;
`;

export const Wrapper = styled.div`
	width: 100%;
	margin-top: 3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
