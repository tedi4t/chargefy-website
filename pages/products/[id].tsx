import { useContext, useState } from 'react';
import type { NextPageContext } from 'next';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
	Carousel,
	Navbar,
	Paper,
	Footer,
	InfoTitle,
	ProductSlide,
	ProductInfo,
	BuyButton,
} from '../../components';
import { fetchAPI } from '../../lib/api';
import { ProductResponse } from '../../lib/apiResponse';

import banner from '../../media/banner/main.jpeg';
import { shoppingCartContext } from '../../contexts/shoppingCart';
import { toProductResponse } from '../../lib/formatter';

const ProductPage = ({ product }: ProductResponse) => {
	const [quantity, setQuantity] = useState(0);
	const [, dispatch] = useContext(shoppingCartContext);

	const handleAddClick = () => {
		if (dispatch) {
			dispatch(
				quantity === 0
					? { type: 'addGood', payload: { product, quantity: quantity + 1 } }
					: { type: 'updateQuantity', payload: { product, quantity: quantity + 1 } },
			);
		}
		setQuantity(quantity + 1);
	};

	const handleRemoveClick = () => {
		if (dispatch) {
			dispatch(
				quantity === 1
					? { type: 'removeGood', payload: { product, quantity: quantity - 1 } }
					: { type: 'updateQuantity', payload: { product, quantity: quantity - 1 } },
			);
		}
		setQuantity(quantity - 1);
	};

	return (
		<div>
			<Head>
				<title>{product.title} | Chargefy</title>
				<meta name='description' content={product.description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'chargefy'} />} />

				<Container>
					<Box sx={{ my: { xs: '2rem', md: '5rem' } }}>
						<Grid container spacing={4}>
							<Grid item container xs={12} md={6} alignItems={'center'}>
								<Carousel Slide={ProductSlide} content={product.images} />
							</Grid>
							<Grid item xs={12} md={6}>
								<ProductInfo {...product} />
								<Box sx={{ mt: '3rem' }}>
									<BuyButton
										quantity={quantity}
										handleAddClick={handleAddClick}
										handleRemoveClick={handleRemoveClick}
									/>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</main>

			<Footer />
		</div>
	);
};

ProductPage.getInitialProps = async (ctx: NextPageContext): Promise<ProductResponse> => {
	const id = ctx.query.id;
	const url = `/products/${id}?populate=*`;
	const response = await fetchAPI(url);
	return toProductResponse(response);
};

export default ProductPage;
