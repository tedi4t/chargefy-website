import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import {
	Wrapper,
	Title,
	RadioCategory,
	PriceSlider,
	ColorCheckbox,
	WAccordion,
	WAccordionSummary,
	WAccordionDetails,
	Text,
} from './Sidebar.styles';
import { CategoryResponse, ColorResponse } from '../../lib/apiResponse';
import { FiltersProps } from './index';
import useDebounce from '../../hooks/useDebounce';
import { useIntl } from 'react-intl';

export interface SidebarProps {
	colors: Array<ColorResponse>;
	categories: Array<CategoryResponse>;
	minPrice: number;
	maxPrice: number;
	filters: FiltersProps;
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

export default function Sidebar({
	colors,
	categories,
	minPrice,
	maxPrice,
	filters,
	setFilters,
}: SidebarProps) {
	const intl = useIntl();
	const offset = 50;
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
	const debouncedPriceRange = useDebounce(priceRange, 1000);

	const minPriceW = Math.max(minPrice - offset, 0);
	const maxPriceW = maxPrice + offset;
	const priceMarks = [
		{
			value: 0,
			label: `$${minPriceW}`,
		},
		{
			value: 100,
			label: `$${maxPriceW}`,
		},
	];

	const getValueLabelFormat = (a: number): string => {
		const range = maxPriceW - minPriceW;
		const price = (a / 100) * range + minPriceW;
		return `${price.toFixed(0)}`;
	};

	const onPriceChange = (e: any): void => {
		const prices = e.target.value;
		setPriceRange(prices);
	};

	useEffect(() => {
		const range = maxPriceW - minPriceW;
		setFilters((filters: FiltersProps) => ({
			...filters,
			minPrice: Math.floor((debouncedPriceRange[0] / 100) * range + minPriceW),
			maxPrice: Math.floor((debouncedPriceRange[1] / 100) * range + minPriceW),
		}));
	}, [debouncedPriceRange, maxPriceW, minPriceW, setFilters]);

	const onCategoryChange = (e: any): void => {
		const category = e.target.value;
		setFilters((filters: FiltersProps) => ({
			...filters,
			categories: [parseInt(category)],
		}));
	};

	const onColorChange = (e: any): void => {
		const color = e.target.value;
		setFilters((filters: FiltersProps) => {
			const colors = filters.colors || [];
			return {
				...filters,
				colors: colors.includes(color)
					? colors.filter(selectedColor => selectedColor !== color)
					: [...colors, color],
			};
		});
	};

	return (
		<Wrapper>
			<WAccordion>
				<WAccordionSummary>
					<Title>{intl.formatMessage({ id: 'sidebar.categories.title' })}</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<RadioGroup onChange={onCategoryChange}>
						{categories.map(category => (
							<FormControlLabel
								key={category.id}
								value={category.id}
								control={<RadioCategory checked={filters.categories?.includes(category.id)} />}
								label={<Text>{category.name}</Text>}
							/>
						))}
					</RadioGroup>
				</WAccordionDetails>
			</WAccordion>

			<WAccordion>
				<WAccordionSummary>
					<Title>{intl.formatMessage({ id: 'sidebar.price.title' })}</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<PriceSlider
						valueLabelDisplay='auto'
						value={priceRange}
						marks={priceMarks}
						valueLabelFormat={getValueLabelFormat}
						onChange={onPriceChange}
					/>
				</WAccordionDetails>
			</WAccordion>

			<WAccordion>
				<WAccordionSummary>
					<Title>{intl.formatMessage({ id: 'sidebar.color.title' })}</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<FormGroup onChange={onColorChange}>
						{colors.map(color => (
							<FormControlLabel
								key={color.id}
								control={<ColorCheckbox />}
								label={<Text>{color.name}</Text>}
								value={color.id}
							/>
						))}
					</FormGroup>
				</WAccordionDetails>
			</WAccordion>
		</Wrapper>
	);
}
