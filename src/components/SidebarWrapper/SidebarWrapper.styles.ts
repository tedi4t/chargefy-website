import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const SidebarWrapper = styled(Box)`
	background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
	width: 100%;
	height: 100%;
`;
