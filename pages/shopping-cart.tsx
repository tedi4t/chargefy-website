import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Navbar, Title, Footer, Paper, InfoTitle } from '../components';

import sofaBg from '../media/banner/sofa.jpeg';
import { useContext } from 'react';
import { shoppingCartContext } from '../contexts/shoppingCart';

const ProductsPage = () => {
	const [shoppingCart] = useContext(shoppingCartContext);

	console.log(shoppingCart);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={sofaBg} element={<InfoTitle text={'shopping cart'} />} />

				<Box sx={{ my: '5rem' }}>
					<Container>
						<Title text={'Libero justo laoreet sit amet cursus'} />
					</Container>
				</Box>
			</main>
			<Footer />
		</div>
	);
};

export default ProductsPage;
