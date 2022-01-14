import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { shoppingCartContext, ShoppingCartItem } from '../../contexts/shoppingCart';
import { Title, Price, Line } from './ShoppingCartItem.styles';
import { BuyButton } from '../index';

export default function ShoppingCartItemComponent({ product, quantity }: ShoppingCartItem) {
	const titleImage = product.images[0];
	const [, dispatch] = useContext(shoppingCartContext);

	const handleAddClick = () => {
		if (dispatch) {
			dispatch(
				quantity === 0
					? { type: 'addGood', payload: { product, quantity: quantity + 1 } }
					: { type: 'updateQuantity', payload: { product, quantity: quantity + 1 } },
			);
		}
	};

	const handleRemoveClick = () => {
		if (dispatch) {
			dispatch(
				quantity === 1
					? { type: 'removeGood', payload: { product, quantity: quantity - 1 } }
					: { type: 'updateQuantity', payload: { product, quantity: quantity - 1 } },
			);
		}
	};

	return (
		<Box sx={{ mt: '1rem' }}>
			<Grid container spacing={4}>
				<Grid item container xs={2} alignItems={'center'}>
					<Link href={`/products/${product.id}`}>
						<a>
							<Image src={titleImage.url} width={titleImage.width} height={titleImage.height} />
						</a>
					</Link>
				</Grid>
				<Grid item container xs={5} alignItems={'center'}>
					<Link href={`/products/${product.id}`}>
						<a>
							<Title>{product.title}</Title>
						</a>
					</Link>
				</Grid>
				<Grid item container xs={3} alignItems={'center'}>
					<BuyButton
						quantity={quantity}
						handleAddClick={handleAddClick}
						handleRemoveClick={handleRemoveClick}
					/>
				</Grid>
				<Grid item container xs={2} alignItems={'center'}>
					<Price>₴ {(product.price * quantity).toFixed(2)}</Price>
				</Grid>
			</Grid>
			<Line />
		</Box>
	);
}
