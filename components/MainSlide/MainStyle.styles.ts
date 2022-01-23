import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

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
  height: 100%;

	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ImageContainer = styled.div`
  @media (max-width: 768px) {
    flex-grow: 1;
    position: relative;
  }
`;

export const ContentContainer = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr 1fr;
	position: relative;

  @media (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
		height: 100%;
  }
`;
