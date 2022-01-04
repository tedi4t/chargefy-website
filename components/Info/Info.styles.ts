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
    color: #a26764;
    font-weight: 600;
    margin-left: 0.5rem;
  }
`;

export const WButton = styled(Button)`
  background: #a26764 !important;
  padding: 1rem 2.5rem;
  color: #fff;
  letter-spacing: 0.2rem;
  transition-duration: 0.4s;
  transition-property: opacity;
  
  &:hover {
    opacity: 0.8 !important;
  }
`;