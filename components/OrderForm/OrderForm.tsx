import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useMemo, useState } from 'react';
import { NovaPoschtaInfo } from './index';
import { fetchNovaPoschtaApi } from '../../lib/api';

interface OrderFormProps {
	areas: Array<NovaPoschtaInfo>;
}

export default function({ areas }: OrderFormProps) {
	const [cities, setCities] =  useState<Array<NovaPoschtaInfo>>([]);
	const [warehouses, setWarehouses] =  useState<Array<NovaPoschtaInfo>>([]);
	const [area, setArea] = useState<string | null>(null);
	const [city, setCity] = useState<string | null>(null);
	const [warehouse, setWarehouse] = useState<string | null>(null);

	useEffect(() => {
		if (area) {
			fetchNovaPoschtaApi({
				modelName: "Address",
				calledMethod: "getCities",
				methodProperties: {
					AreaRef: area
				},
			}).then((response: any) => {
				setCities(response.data.map((area: any) => ({
					name: area.Description,
					ref: area.Ref,
				})))
			});
		}
	}, [area]);

	useEffect(() => {
		if (city) {
			fetchNovaPoschtaApi({
				modelName: "Address",
				calledMethod: "getWarehouses",
				methodProperties: {
					CityRef: city
				},
			}).then((response: any) => {
				setWarehouses(response.data.map((warehouse: any) => ({
					name: warehouse.Description,
					ref: warehouse.Ref,
				})))
			});
		}
	}, [city]);

	const onAreaChange = (e: any) => {
		setArea(e.target.value);
		setCities([]);
		setWarehouses([]);
		setCity(null);
		setWarehouse(null);
	}

	const onCityChange = (e: any) => {
		setCity(e.target.value);
		setWarehouses([]);
		setWarehouse(null);
	}

	const onWarehouseChange = (e: any) => {
		setWarehouse(e.target.value);
	}

	return (
		<div>
			<FormControl fullWidth>
				<InputLabel id='area-select-label'>Area</InputLabel>
				<Select
					labelId='area-select-label'
					id='area-select'
					label='Area'
					value={area}
					onChange={onAreaChange}
				>
					{
						areas.map((area: NovaPoschtaInfo) => (
							<MenuItem value={area.ref} key={area.ref}>{area.name}</MenuItem>
						))
					}
				</Select>
			</FormControl>

			<FormControl fullWidth sx={{ mt: '1.5rem' }}>
				<InputLabel id='city-select-label'>City</InputLabel>
				<Select
					labelId='city-select-label'
					id='city-select'
					label='City'
					value={city}
					onChange={onCityChange}
					disabled={!cities.length}
				>
					{
						cities.map((city: NovaPoschtaInfo) => (
							<MenuItem value={city.ref} key={city.ref}>{city.name}</MenuItem>
						))
					}
				</Select>
			</FormControl>

			<FormControl fullWidth sx={{ mt: '1.5rem' }}>
				<InputLabel id='warehouse-select-label'>Warehouse</InputLabel>
				<Select
					labelId='warehouse-select-label'
					id='warehouse-select'
					label='Warehouse'
					value={warehouse}
					onChange={onWarehouseChange}
					disabled={!warehouses.length}
				>
					{
						warehouses.map((warehouse: NovaPoschtaInfo) => (
							<MenuItem value={warehouse.ref} key={warehouse.ref}>{warehouse.name}</MenuItem>
						))
					}
				</Select>
			</FormControl>
		</div>
	);
}