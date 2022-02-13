import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import {
	Title,
	Description,
	Characheristics,
	Characheristic,
	Key,
	Value,
	Price,
	Advantages,
} from './ProductInfo.styles';
import { ProductInfoProps } from './index';
import { useRouter } from 'next/router';

export default function ProductInfo(props: ProductInfoProps) {
	const router = useRouter();
	const advantages: Array<{
		icon: JSX.Element;
		text: string;
	}> = [
		{
			icon: <LocalShippingIcon color={'primary'} />,
			text:
				router.locale === 'uk'
					? 'Безкоштовна доставка від 790 гривень'
					: 'Бесплатная доставка от 790 гривен',
		},
	];

	return (
		<div>
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
			<Characheristics>
				{Object.keys(props.characteristic).map(characteristic => (
					<Characheristic key={characteristic}>
						<Key>{characteristic}:&nbsp;</Key>
						<Value>{props.characteristic[characteristic]}</Value>
					</Characheristic>
				))}
			</Characheristics>
			<Price>
				{props.beforePrice ? (
					<>
						<span className={'crossed'}>₴{props.beforePrice}</span>
						<span className={'sale'}>₴{props.price}</span>
					</>
				) : (
					<>₴{props.price}</>
				)}
			</Price>
			<Advantages>
				{advantages.map(advantage => (
					<Box sx={{ mt: '0.5rem' }} key={advantage.text}>
						<Grid container spacing={2}>
							<Grid item>{advantage.icon}</Grid>
							<Grid item>
								<Typography fontWeight={'light'}>{advantage.text}</Typography>
							</Grid>
						</Grid>
					</Box>
				))}
			</Advantages>
		</div>
	);
}
