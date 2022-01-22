import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export const SlideContent = styled.div`
	height: 100%;
	padding: 5rem 5rem 3rem 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
	background: #efefef;
	position: relative;

	@media (max-width: 768px) {
		height: 70vh;
	}
`;

export const Title = styled.h1`
	font-weight: 200;
`;

export const Text = styled.p`
	font-weight: 300;
	font-size: 1.1rem;
	line-height: 1.9rem;
`;

export const GridContainer = styled(Grid)`
	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}

	@media (min-width: 768px) {
		height: 100%;
	}
`;

export const ImageWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;
