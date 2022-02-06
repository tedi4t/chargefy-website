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
import { useIntl } from 'react-intl';

const OrderPage = ({ areas }: { areas: Array<NovaPoschtaInfo> }) => {
	const intl = useIntl();
	const [shoppingCart] = useContext(shoppingCartContext);
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
				<title>{intl.formatMessage({ id: 'order.title' })}</title>
				<meta
					name='description'
					content={intl.formatMessage({ id: 'order.description' })}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={banner} element={<InfoTitle text={intl.formatMessage({ id: 'order.header.title' })} />} />

				<Box sx={{ my: '5rem' }}>
					<Container>
						<Title text={intl.formatMessage({ id: 'order.main.title' })} />

						<OrderForm areas={areas} order={order} setOrder={setOrder} />

						<Box sx={{ mt: '4rem' }}>
							<Grid container>
								<Grid item xs={0} md={2}></Grid>
								<Grid item xs={12} md={8}>
									<ActionButton
										disabled={Object.values(order).some(value => !value)}
										onClick={handleOrder}
									>
										<div>{intl.formatMessage({ id: 'order.button.text' })}</div>
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
