import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Navbar, Title, Footer, Paper, InfoTitle, ShoppingCartItem } from '../components';

import sofaBg from '../media/banner/sofa.jpeg';
import { useContext } from 'react';
import { shoppingCartContext, ShoppingCartItem as ShoppingCartItemType } from '../contexts/shoppingCart';

const ProductsPage = () => {
	const [shoppingCart] = useContext(shoppingCartContext);
	const totalPrice = shoppingCart?.reduce((acc: number, item: ShoppingCartItemType) => {
		return acc + (item.product.price * item.quantity);
	}, 0) || 0;

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={sofaBg} element={<InfoTitle text={'shopping cart'} />} />

				<Box sx={{ mt: '5rem' }}>
					<Container>
						<Title text={'Libero justo laoreet sit amet cursus'} />
					</Container>
				</Box>

				<Box sx={{ my: '5rem' }}>
					<Container>
						{shoppingCart?.length &&
							shoppingCart.map(shoppingCartItem => (
								<ShoppingCartItem key={shoppingCartItem.product.id} {...shoppingCartItem} />
							))}
						<Typography>
							<Box sx={{ mt: '2rem', textAlign: 'right', fontWeight: 300, fontSize: '1.3rem' }}>
								₴ {totalPrice.toFixed(2)}
							</Box>
						</Typography>
					</Container>
				</Box>
			</main>
			<Footer />
		</>
	);
};

export default ProductsPage;