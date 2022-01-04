import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid #efefef;
  max-width: 400px;
  transition-duration: 0.3s;
  position: relative;
  
  .hover_decoration {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #efefef;
    opacity: 0.5;
    transform: scale(0);
    transition-duration: 0.6s;
    z-index: -1;
  }
  
  &:hover {
    border-color: #e99c2e;
    
    .hover_decoration {
      transform: scale(1);
    }
  }
`;

export const Title = styled.h2`
  font-weight: 200;
  text-transform: capitalize;
  letter-spacing: 0.18rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Price = styled.h3`
  font-weight: 300;
  letter-spacing: 0.15rem;
  text-align: center;
  
  .crossed {
    text-decoration: line-through;
  }
  
  .sale {
    margin-left: 1rem;
    font-weight: 400;
    color: #e99c2e;
  }
`;

export const Line = styled.div`
  margin-top: 1rem;
  border-bottom: 2px solid #efefef;
`;
