import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Title = styled(Typography)``;
Title.defaultProps = {
	variant: 'h3',
	fontWeight: 300,
};

export const Description = styled(Typography)`
	margin: 3rem 0;
`;
Description.defaultProps = {
	fontWeight: 300,
};

export const Characheristics = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Characheristic = styled.div`
	font-size: 1.1rem;
	font-weight: 300;
	line-height: 2rem;
`;

export const Key = styled.span`
	font-weight: 600;
`;

export const Value = styled.span``;

export const WButton = styled(Button)`
	width: 100%;
	background: #e99c2e;
	border: 3px solid #e99c2e;
	border-radius: 0;
	margin-top: 3rem;
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

export const Price = styled.h3`
  font-weight: 300;
  letter-spacing: 0.15rem;

  .crossed {
    text-decoration: line-through;
  }

  .sale {
    margin-left: 1rem;
    font-weight: 400;
    color: #e99c2e;
  }
`;
