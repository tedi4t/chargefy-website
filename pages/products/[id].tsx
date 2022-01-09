import { useContext, useEffect, useState } from 'react';
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
import { fetchAPI, getStrapiMedia } from '../../lib/api';
import { ProductResponse } from '../../lib/apiResponse';

import sofaBg from '../../media/banner/sofa.jpeg';
import { shoppingCartContext } from '../../contexts/shoppingCart';

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
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={sofaBg} element={<InfoTitle text={'chargefy'} />} />

				<Container>
					<Box sx={{ my: '5rem' }}>
						<Grid container spacing={4}>
							<Grid item container xs={6} alignItems={'center'}>
								<Carousel Slide={ProductSlide} content={product.images} />
							</Grid>
							<Grid item xs={6}>
								<ProductInfo {...product} />
								<BuyButton
									quantity={quantity}
									setQuantity={setQuantity}
									handleAddClick={handleAddClick}
									handleRemoveClick={handleRemoveClick}
								/>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</main>

			<Footer />
		</div>
	);
};

ProductPage.getInitialProps = async (ctx: NextPageContext) => {
	const id = ctx.query.id;
	const url = `/products/${id}?populate=*`;
	const response = await fetchAPI(url);
	const product = response.data.attributes;
	const images = product.images.data;

	return {
		product: {
			id: response.data.id,
			title: product.title,
			description: product.description,
			price: product.price,
			sale: product.sale,
			characteristic: product.characteristic,
			images: images.map((image: any) => {
				const img = image.attributes.formats.medium;
				return {
					url: getStrapiMedia(img.url),
					width: img.width,
					height: img.height,
				};
			}),
		},
	} as ProductResponse;
};

export default ProductPage;
