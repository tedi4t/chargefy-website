import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import { NovaPoschtaInfo, OrderFormValue } from './index';
import { fetchNovaPoschtaApi } from '../../lib/api';
import { WFormControl, WTextField, WRadioGroup } from './OrderForm.styles';

interface OrderFormProps {
	areas: Array<NovaPoschtaInfo>;
	order: OrderFormValue;
	setOrder: Dispatch<SetStateAction<OrderFormValue>>;
}

interface FormSelectProps {
	value: NovaPoschtaInfo | null;
	onChange: (e: any) => any;
	content: Array<NovaPoschtaInfo>;
	id: string;
	label: string;
}

export const FormSelect = (props: FormSelectProps) => {
	return (
		<WFormControl fullWidth>
			<InputLabel id={props.id}>{props.label}</InputLabel>
			<Select
				labelId={props.id}
				label={props.label}
				value={props.value?.ref || ''}
				onChange={props.onChange}
				disabled={!props.content.length}
			>
				{props.content.map((area: NovaPoschtaInfo) => (
					<MenuItem value={area.ref} key={area.ref}>
						{area.name}
					</MenuItem>
				))}
			</Select>
		</WFormControl>
	);
};

export default function OrderForm({ areas, order, setOrder }: OrderFormProps) {
	const [cities, setCities] = useState<Array<NovaPoschtaInfo>>([]);
	const [warehouses, setWarehouses] = useState<Array<NovaPoschtaInfo>>([]);

	useEffect(() => {
		if (order.area?.ref) {
			fetchNovaPoschtaApi({
				modelName: 'Address',
				calledMethod: 'getCities',
				methodProperties: {
					AreaRef: order.area.ref,
				},
			}).then((response: any) => {
				setCities(
					response.data.map((area: any) => ({
						name: area.Description,
						ref: area.Ref,
					})),
				);
			});
		}
	}, [order.area]);

	useEffect(() => {
		if (order.city?.ref) {
			fetchNovaPoschtaApi({
				modelName: 'Address',
				calledMethod: 'getWarehouses',
				methodProperties: {
					CityRef: order.city.ref,
				},
			}).then((response: any) => {
				setWarehouses(
					response.data.map((warehouse: any) => ({
						name: warehouse.Description,
						ref: warehouse.Ref,
					})),
				);
			});
		}
	}, [order.city]);

	const onAreaChange = (e: any) => {
		const areaRef = e.target.value;
		const area = areas.find(area => area.ref === areaRef) || null;
		setOrder(order => ({
			...order,
			area: area,
			city: null,
			warehouse: null,
		}));
		setCities([]);
		setWarehouses([]);
	};

	const onCityChange = (e: any) => {
		const cityRef = e.target.value;
		const city = cities.find(city => city.ref === cityRef) || null;
		setOrder(order => ({
			...order,
			city: city,
			warehouse: null,
		}));
		setWarehouses([]);
	};

	const onWarehouseChange = (e: any) => {
		const warehouseRef = e.target.value;
		const warehouse = warehouses.find(warehouse => warehouse.ref === warehouseRef) || null;
		setOrder(order => ({
			...order,
			warehouse: warehouse,
		}));
	};

	return (
		<div>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<WTextField
						fullWidth
						label='Name'
						variant='outlined'
						// value={order.name || ''}
						onChange={(e: any) => {
							setOrder((order: OrderFormValue) => ({
								...(order as OrderFormValue),
								name: e.target.value,
							}));
						}}
					/>
					<WTextField
						fullWidth
						label='Surname'
						variant='outlined'
						onChange={(e: any) => {
							setOrder((order: OrderFormValue) => ({
								...(order as OrderFormValue),
								surname: e.target.value,
							}));
						}}
					/>
					<WTextField
						fullWidth
						label="Po bat'kovi"
						variant='outlined'
						// value={order.name || ''}
						onChange={(e: any) => {
							setOrder((order: OrderFormValue) => ({
								...(order as OrderFormValue),
								middleName: e.target.value,
							}));
						}}
					/>
					<WTextField
						fullWidth
						label='Phone Number'
						variant='outlined'
						// value={order.name || ''}
						onChange={(e: any) => {
							setOrder((order: OrderFormValue) => ({
								...(order as OrderFormValue),
								phoneNumber: e.target.value,
							}));
						}}
					/>
					<WRadioGroup
						row
						onChange={(e: any) => {
							setOrder((order: OrderFormValue) => ({
								...(order as OrderFormValue),
								payment: e.target.value,
							}));
						}}
					>
						<FormControlLabel
							value={'cash'}
							control={<Radio />}
							label={<Typography>Cash</Typography>}
						/>
						<FormControlLabel
							value={'card'}
							control={<Radio />}
							label={<Typography>Card</Typography>}
						/>
					</WRadioGroup>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography fontWeight={300} variant={'h5'}>
						<Box sx={{ display: { xs: 'block', md: 'none' }}}>
							Nova Poschta Info
						</Box>
					</Typography>
					<FormSelect
						value={order.area}
						onChange={onAreaChange}
						content={areas}
						id={'area-select-label'}
						label={'Area'}
					/>

					<FormSelect
						value={order.city}
						onChange={onCityChange}
						content={cities}
						id={'city-select-label'}
						label={'City'}
					/>

					<FormSelect
						value={order.warehouse}
						onChange={onWarehouseChange}
						content={warehouses}
						id={'warehouse-select-label'}
						label={'Warehouse'}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
