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

export interface SidebarProps {
	colors: Array<ColorResponse>;
	categories: Array<CategoryResponse>;
	minPrice: number;
	maxPrice: number;
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

export default function Sidebar({
	colors,
	categories,
	minPrice,
	maxPrice,
	setFilters,
}: SidebarProps) {
	const offset = 50;
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

	const minPriceW = Math.max(minPrice - offset, 0);
	const maxPriceW = maxPrice + offset;
	const priceMarks = [
		{
			value: 0,
			label: `₴${minPriceW}`,
		},
		{
			value: 100,
			label: `₴${maxPriceW}`,
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
			minPrice: (priceRange[0] / 100) * range + minPriceW,
			maxPrice: (priceRange[1] / 100) * range + minPriceW,
		}));
	}, [priceRange]);

	const onCategoryChange = (e: any): void => {
		const category = e.target.value;
		setFilters((filters: FiltersProps) => ({
			...filters,
			categories: [category],
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
					<Title>Категорії</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<RadioGroup onChange={onCategoryChange}>
						{categories.map(category => (
							<FormControlLabel
								key={category.id}
								value={category.id}
								control={<RadioCategory />}
								label={<Text>{category.name}</Text>}
							/>
						))}
					</RadioGroup>
				</WAccordionDetails>
			</WAccordion>

			<WAccordion>
				<WAccordionSummary>
					<Title>Ціна</Title>
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
					<Title>Колір</Title>
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
