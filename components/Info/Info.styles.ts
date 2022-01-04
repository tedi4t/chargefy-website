import styled from '@emotion/styled';

import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  color: #fff;
  padding: 3rem 0;
`;

export const Title = styled.h1`
  font-weight: 300;
`;

export const Description = styled.p`
  font-width: 1.5rem;
  line-height: 2rem;
`;

export const Subtitle = styled.h4`
  
  
  .highlighted {
    color: #e99c2e;
    font-weight: 600;
    margin-left: 0.5rem;
  }
`;

export const WButton = styled(Button)`
  background: #e99c2e;
  padding: 1rem 2.5rem;
  color: #fff;
  letter-spacing: 0.2rem;
  transition-duration: 0.4s;
  border: 1px solid #e99c2e;
  transition-property: transparent color;
  
  &:hover {
    background: transparent;
    color: #e99c2e;
  }
`;