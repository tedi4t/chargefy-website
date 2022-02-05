import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Navbar, Footer, Paper, InfoTitle, ShoppingCartItem, ActionButton } from '../../components';

import banner from '../../../media/banner/main.jpeg';
import {
	shoppingCartContext,
	ShoppingCartItem as ShoppingCartItemType,
} from '../../contexts/shoppingCart';

const ShoppingCartPage = () => {
	const [shoppingCart] = useContext(shoppingCartContext);
	const router = useRouter();
	const totalPrice =
		shoppingCart?.reduce((acc: number, item: ShoppingCartItemType) => {
			return acc + item.product.price * item.quantity;
		}, 0) || 0;

	useEffect(() => {
		if (router && !shoppingCart?.length) {
			router.push('/');
		}
	}, [shoppingCart, router]);

	return (
		<>
			<Head>
				<title>Тримач для телефону | Chargefy</title>
				<meta
					name='description'
					content='Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'Корзина'} />} />

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
						<Box sx={{ mt: '4rem' }}>
							<Grid container>
								<Grid item xs={0} md={2}></Grid>
								<Grid item xs={12} md={8}>
									<Link href={'/shopping-cart/order'}>
										<a>
											<ActionButton>
												<div>Оформити замовлення</div>
											</ActionButton>
										</a>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</Box>
			</main>
			<Footer />
		</>
	);
};

export default ShoppingCartPage;