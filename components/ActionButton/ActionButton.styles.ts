import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const WButton = styled(Button)`
	width: 100%;
	background: #e99c2e;
	border: 3px solid #e99c2e;
	border-radius: 0;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 1.2rem;
	color: #fff;
	letter-spacing: 0.4rem;
	
	&:disabled {
		background: #fff;
	}

	&:hover {
		background: #fff;
		color: #e99c2e;
	}
`;
