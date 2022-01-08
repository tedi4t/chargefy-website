import { useState } from 'react';
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

export default function () {
	const [value, setValue] = useState([30, 40]);
	const categories = ['charger', 'holder', 'cable', 'other'];
	const colors = ['red', 'blue', 'green', 'yellow'];
	const priceMarks = [
		{
			value: 0,
			label: '₴130',
		},
		{
			value: 100,
			label: '₴980',
		},
	];

	return (
		<Wrapper>
			<WAccordion>
				<WAccordionSummary>
					<Title>Categories</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<RadioGroup>
						{categories.map(category => (
							<FormControlLabel
								value={category}
								control={<RadioCategory />}
								label={<Text>{category}</Text>}
							/>
						))}
					</RadioGroup>
				</WAccordionDetails>
			</WAccordion>

			<WAccordion>
				<WAccordionSummary>
					<Title>Price</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<PriceSlider
						valueLabelDisplay='auto'
						aria-label='pretto slider'
						value={value}
						marks={priceMarks}
						valueLabelFormat={a => `950`}
					/>
				</WAccordionDetails>
			</WAccordion>

			<WAccordion>
				<WAccordionSummary>
					<Title>Color</Title>
				</WAccordionSummary>
				<WAccordionDetails>
					<FormGroup>
						{colors.map(color => (
							<FormControlLabel
								control={<ColorCheckbox />}
								label={<Text>{color}</Text>}
								value={color}
							/>
						))}
					</FormGroup>
				</WAccordionDetails>
			</WAccordion>
		</Wrapper>
	);
}
