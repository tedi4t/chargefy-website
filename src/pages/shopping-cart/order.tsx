import { useContext, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Navbar, Footer, Paper, InfoTitle, Title, ActionButton } from '../../components';

import banner from '../../../media/banner/main.jpeg';
import OrderForm, { NovaPoschtaInfo, OrderFormValue } from '../../components/OrderForm';
import { fetchAPI, fetchNovaPoschtaApi } from '../../lib/api';
import { shoppingCartContext, ShoppingCartItem } from '../../contexts/shoppingCart';
import { event } from '../../utils/gtag';

const OrderPage = ({ areas }: { areas: Array<NovaPoschtaInfo> }) => {
	const router = useRouter();
	const [shoppingCart, dispatch] = useContext(shoppingCartContext);
	const [order, setOrder] = useState<OrderFormValue>({
		name: null,
		surname: null,
		middleName: null,
		phoneNumber: null,
		payment: 'cash',
		area: null,
		city: null,
		warehouse: null,
	});

	const handleOrder = async () => {
		const orderResponse = await fetchAPI('/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: {
					name: order.name,
					surname: order.surname,
					middlename: order.middleName,
					phoneNumber: order.phoneNumber,
					payment: order.payment,
					area: order.area?.name,
					city: order.city?.name,
					warehouse: order.warehouse?.name,
				},
			}),
		});
		const orderId = orderResponse.data.id;

		const promises =
			shoppingCart?.map(async item => {
				await fetchAPI('/order-items', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						data: {
							order: orderId,
							product: item.product.id,
							quantity: item.quantity,
						},
					}),
				});
			}) || [];

		Promise.all(promises).then(() => {
			const totalPrice: number =
				shoppingCart?.reduce((acc: number, shoppingCartItem: ShoppingCartItem) => {
					return acc + shoppingCartItem.product.price * shoppingCartItem.quantity;
				}, 0) || 0;
			event({
				action: 'purchase',
				category: 'ecommerce',
				label: 'purchase',
				value: totalPrice,
				currency: 'UAH',
			});
		});
	};

	return (
		<>
			<Head>
				<title>Замовити | Chargefy</title>
				<meta
					name='description'
					content='Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={'Замовлення'} />} />

				<Box sx={{ my: '5rem' }}>
					<Container>
						<Title text={'Інформація про замовлення'} />

						<OrderForm areas={areas} order={order} setOrder={setOrder} />

						<Box sx={{ mt: '4rem' }}>
							<Grid container>
								<Grid item xs={0} md={2}></Grid>
								<Grid item xs={12} md={8}>
									<ActionButton
										disabled={Object.values(order).some(value => !value)}
										onClick={handleOrder}
									>
										<div>замовити</div>
									</ActionButton>
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

OrderPage.getInitialProps = async () => {
	const response = await fetchNovaPoschtaApi({
		modelName: 'Address',
		calledMethod: 'getAreas',
		methodProperties: {},
	});

	return {
		areas: response.data.map((area: any) => ({
			ref: area.Ref,
			name: area.Description,
		})),
	};
};

export default OrderPage;