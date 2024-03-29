import { useContext, useState } from 'react';
import type { NextPageContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';

import {
	Carousel,
	Navbar,
	Footer,
	ProductSlide,
	ProductInfo,
	BuyButton,
	Title,
	Products,
} from '../../components';
import { fetchAPI } from '../../lib/api';
import { ProductResponse, ProductsListResponse } from '../../lib/apiResponse';

import { shoppingCartContext } from '../../contexts/shoppingCart';
import { toProductResponse, toProductsListResponse } from '../../lib/formatter';
import qs from 'qs';
import { useIntl } from 'react-intl';

export interface ProductPageProps {
	productResponse: ProductResponse;
	categoryProducts: ProductsListResponse;
}

const ProductPage = ({
	productResponse: { product },
	categoryProducts: { products: categoryProducts },
}: ProductPageProps) => {
	const intl = useIntl();

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

	const stages = {
		mainPage: {
			name: intl.formatMessage({ id: 'product.stages.main' }),
			path: '/',
		},
		products: {
			name: intl.formatMessage({ id: 'product.stages.goods' }),
			path: '/products',
		},
		currentProduct: {
			name: product.title,
			path: `/products/${product.id}`,
		},
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

				<Container>
					<Box sx={{ mt: { xs: '6rem', md: '8rem' } }}>
						<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
							{Object.values(stages).map(stage => (
								<Link href={stage.path} key={stage.path}>
									<a>{stage.name}</a>
								</Link>
							))}
						</Breadcrumbs>
					</Box>
					<Box sx={{ mt: { xs: '1rem', md: '3rem' }, mb: { xs: '2rem', md: '5rem' } }}>
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
								<Box sx={{ mt: '1.2rem' }}>
									<Grid container spacing={2}>
										<Grid item alignItems={'center'}>
											<PhoneIcon color={'primary'} />
										</Grid>
										<Grid item>
											<Grid container alignItems={'center'} height={'100%'}>
												<Typography fontWeight={'light'}>+380 63 039 90 93</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Box>

					{!!categoryProducts.data.length && (
						<>
							<Title text={intl.formatMessage({ id: 'product.similar.title' })} />
							<Box sx={{ my: '2rem' }}>
								<Products products={categoryProducts.data} />
							</Box>
						</>
					)}
				</Container>
			</main>

			<Footer />
		</div>
	);
};

ProductPage.getInitialProps = async (ctx: NextPageContext): Promise<ProductPageProps> => {
	const id = ctx.query.id;
	const productUrl = `/products/${id}?populate=*`;
	const response = await fetchAPI(productUrl);
	const productResponse = toProductResponse(response);

	const categoryQuery = qs.stringify({
		filters: {
			category: {
				id: {
					$eq: productResponse.product.category.id,
				},
			},
			id: {
				$ne: productResponse.product.id,
			},
		},
		pagination: {
			page: 1,
			rowsPerPage: 4,
		},
		populate: '*',
		locale: ctx.locale || 'en',
	});
	const categoryUrl = `/products?${categoryQuery}`;
	const categoryResponse = await fetchAPI(categoryUrl);
	const categoryProducts = toProductsListResponse(categoryResponse);

	return {
		productResponse,
		categoryProducts,
	};
};

export default ProductPage;
