import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Wrapper = styled.div`
	background: #efefef;
	font-weight: 300;
	position: sticky;
	top: 0;
`;

export const InsideWrapper = styled.div`
	padding: 2rem 0;

	@media (max-width: 768px) {
		padding-bottom: 1rem;
	}
`;

export const Title = styled.div`
	padding: 0 2rem 0.5rem 2rem;
	margin-bottom: 1rem;
	position: relative;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	font-weight: 200;
	letter-spacing: 0.3rem;

	&::after {
		content: '';
		height: 1px;
		background: #e99c2e;
		position: absolute;
		bottom: 0rem;
		left: 1rem;
		right: 1rem;
	}
`;

export const Column = styled.div`
	padding: 0 2rem;
	position: relative;
`;

export const LogoWrapper = styled.div`
	width: 60%;
	margin: auto;

	img {
		width: 100%;
	}
`;

export const LinkWrapper = styled.div`
	margin: 1rem 0;
	text-transform: capitalize;
`;

export const FooterText = styled(Typography)`
	text-align: center;
	letter-spacing: 0.15rem;
	font-size: 0.9rem;
	opacity: 0.5;
	padding: 1.5rem;

	@media (max-width: 768px) {
		padding-top: 0;
	}
`;

export const HighlightGrid = styled(Grid)`
	transition-duration: 0.2s;
	cursor: pointer;

	&:hover {
		color: #e99c2e;
	}
`;

export const Highlight = styled.div`
	transition-duration: 0.2s;

	&:hover {
		color: #e99c2e;
	}
`;
