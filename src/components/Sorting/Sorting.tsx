import { Dispatch, SetStateAction } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Sorting({
	sorting,
	setSorting,
}: {
	sorting: string | undefined;
	setSorting: SetStateAction<Dispatch<string | undefined>>;
}) {
	const intl = useIntl();

	const rendererValue = (value: string) => {
		const textGetter = (): string => {
			switch (value) {
				case 'price:asc': {
					return intl.formatMessage({ id: 'sorting.price.asc' });
				}
				case 'price:desc': {
					return intl.formatMessage({ id: 'sorting.price.desc' });
				}
				default: {
					return intl.formatMessage({ id: 'sorting.price.default' });
				}
			}
		};

		const text = textGetter();
		return (
			<Box sx={{ px: '0.7rem' }}>
				<Typography fontWeight={'lighter'}>
					{text}
				</Typography>
			</Box>

		)
	}

	return (
		<>
			<Grid container alignItems={'center'} flexDirection={'row'}>
				<Typography sx={{ mr: '1rem' }} fontWeight={'lighter'}>
					<FormattedMessage id={'sorting.price.name'} />
				</Typography>
				<FormControl>
					<Select
						value={sorting || 'default'}
						onChange={(e: any) => setSorting(e.target.value)}
						variant={'standard'}
						renderValue={rendererValue}
					>
						<MenuItem value={undefined}>
							{intl.formatMessage({ id: 'sorting.price.default' })}
						</MenuItem>
						<MenuItem value={'price:asc'}>
							{intl.formatMessage({ id: 'sorting.price.asc' })}
						</MenuItem>
						<MenuItem value={'price:desc'}>
							{intl.formatMessage({ id: 'sorting.price.desc' })}
						</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</>
	);
}
