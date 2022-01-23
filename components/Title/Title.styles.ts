import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const Wrapper = styled.div`
	margin: 5rem 1rem 4rem 1rem;

	@media (max-width: 768px) {
		margin: 3rem 1rem 2rem 1rem;
	}
`;

export const Title = styled(Typography)`
	font-weight: 300;

  @media (max-width: 768px) {
    font-size: 2.75rem !important;
  }
`;
Title.defaultProps = {
	variant: 'h2',
	align: 'center',
};
