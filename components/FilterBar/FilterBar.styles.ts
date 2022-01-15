import styled from '@emotion/styled';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const TopLine = styled.div`
	height: 0px;
  background: rgba(0, 0, 0, 0.4);
	box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
	position: relative;
	z-index: 2;
`;

export const Wrapper = styled.div`
  background: #efefef;
  padding: 0.5rem 1rem;
`;

export const FilterIcon = styled(FilterAltOutlinedIcon)`
	margin-right: 0.4rem;
  font-size: 2rem;
  border: 1px solid white;
  border-radius: 100px;
  padding: 0.2rem;
`;

export const SortIcon = styled(SortOutlinedIcon)`
  margin-left: 0.4rem;
  font-size: 2rem;
	border: 1px solid white;
	border-radius: 100px;
	padding: 0.2rem;
`;

export const WButton = styled(Button)`
	padding: 0;
	border-width: 0;
`;

export const Text = styled(Typography)`
	margin: 0;
	line-height: 1rem;
`;