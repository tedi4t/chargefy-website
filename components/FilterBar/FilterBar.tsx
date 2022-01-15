import { Dispatch, SetStateAction, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';

import {
	Wrapper,
	TopLine,
	FilterIcon,
	Text,
	SortIcon,
	WButton,
	Overlay,
	GridFullHeight,
	WSelect,
	ArrowAsc,
	ArrowDesc,
} from './FilterBar.styles';
import { CategoryResponse, ColorResponse } from '../../lib/apiResponse';
import Sidebar, { FiltersProps } from '../Sidebar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export interface FilterBarProps {
	colors: Array<ColorResponse>;
	categories: Array<CategoryResponse>;
	minPrice: number;
	maxPrice: number;
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
	sorting: string | undefined;
	setSorting: Dispatch<SetStateAction<string | undefined>>;
}

export default function FilterBar(props: FilterBarProps) {
	const [opened, setOpened] = useState<boolean>(false);

	const handleFilterClick = () => {
		setOpened(true);
	}

	const handleCloseClick = () => {
		setOpened(false);
	}

	const handleApplyFiltersClick = () => {
		setOpened(false);
	}

	const handleChangeSorting = (e: any) => {
		props.setSorting(e.target.value);
	}

	const rendererValue = () => {
		switch (props.sorting) {
			case 'price:desc': {
				return (
					<Box sx={{ mt: '0.1rem' }}>
						зменшення ціни
					</Box>
				)
			}
			case 'price:asc': {
				return (
					<Box sx={{ mt: '0.1rem' }}>
						зростання ціни
					</Box>
				)
			}
			default: {
				return (
					<Box sx={{ mt: '0.1rem' }}>
						Сортувати
					</Box>
				)
			}
		}
	}

	return (
		<>
			<TopLine />
			<Wrapper>
				<Container>
					<Grid container justifyContent={'space-between'} flexDirection={'row'}>
						<Grid item>
							<WButton onClick={handleFilterClick}>
								<Grid container sx={{ width: 'unset' }} alignItems={'center'}>
									<FilterIcon />
									<Text>
										Filter
									</Text>
								</Grid>
							</WButton>
						</Grid>

						<Grid item>
							<WButton>
								<Grid container sx={{ width: 'unset' }} alignItems={'center'}>
										<FormControl>
											<WSelect
												value={props.sorting || 'default'}
												onChange={handleChangeSorting}
												IconComponent={SortIcon}
												variant={'standard'}
												renderValue={rendererValue}
											>
												<MenuItem value={'price:asc'}>Price Ascending</MenuItem>
												<MenuItem value={'price:desc'}>Price Descending</MenuItem>
											</WSelect>
										</FormControl>
								</Grid>
							</WButton>
						</Grid>
					</Grid>
				</Container>
			</Wrapper>
			{
				opened && (
					<Overlay open={opened}>
						<Box sx={{ position: 'absolute', top: '2.5rem', right: '2.5rem', zIndex: 1300 }}>
							<WButton onClick={handleCloseClick}>
								<CloseOutlinedIcon />
							</WButton>
						</Box>
						<GridFullHeight container flexDirection={'column'}>
							<Grid item>
								<Box sx={{ mt: '3.5rem' }}>
									<Sidebar {...props} />
								</Box>
							</Grid>
							<Grid item container flexGrow={1} alignItems={'flex-end'}>
								<Box sx={{ p: '2rem', width: '100%' }}>
									<Button variant={'outlined'} fullWidth onClick={handleApplyFiltersClick}>
										apply filters
									</Button>
								</Box>
							</Grid>
						</GridFullHeight>
					</Overlay>
				)
			}
		</>
	);
}