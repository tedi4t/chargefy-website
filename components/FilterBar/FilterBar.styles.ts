import styled from '@emotion/styled';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Select from '@mui/material/Select';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
  color: ${({ theme }) => theme.palette.primary.main} !important;
`;

export const WButton = styled(Button)`
	padding: 0;
	border-width: 0;
  min-width: 0;
`;

export const Text = styled(Typography)`
	color: ${({ theme }) => theme.palette.primary.main};
	margin: 0;
	line-height: 1rem;
`;

export const Overlay = styled(Backdrop)`
	z-index: 1200;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: ${({ theme }) => theme.palette.primary.light};
`;

export const GridFullHeight = styled(Grid)`
	height: 100%;
`;

export const ArrowAsc = styled(ArrowRightAltIcon)`
  transform: rotate(-90deg);
`;

export const ArrowDesc = styled(ArrowRightAltIcon)`
  transform: rotate(90deg);
`;

export const WSelect = styled(Select)`
	&::before {
    border-bottom-width: 0;
	}
	
	div {
		padding-right: 1.2rem !important;
    color: ${({ theme }) => theme.palette.primary.main};
	}
`;