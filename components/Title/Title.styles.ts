import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const Wrapper = styled.div`
  margin: 5rem 1rem 4rem 1rem;
`;

export const Title = styled(Typography)`
  font-weight: 300;
`;
Title.defaultProps = {
  variant: 'h2',
  align: 'center',
}