import styled from '@emotion/styled'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export const WAppBar = styled(AppBar)`
  background: #a26764;
  opacity: 0.9;
`;
WAppBar.defaultProps = {
  position: 'fixed',
}

export const LogoWrapper = styled(Box)`
  width: 150px;
  
  img {
    width: 100%;
  }
`;

export const WAvatar = styled(Avatar)`
  background: '#efefef'; 
  color: '#000';
  font-weight: 200;
`