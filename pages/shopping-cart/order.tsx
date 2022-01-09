import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
	Navbar,
	Footer,
	Paper,
	InfoTitle,
} from '../../components';

import sofaBg from '../../media/banner/sofa.jpeg';
import OrderForm, { NovaPoschtaInfo } from '../../components/OrderForm';
import { fetchNovaPoschtaApi } from '../../lib/api';

const OrderPage = ({ areas }: { areas: Array<NovaPoschtaInfo> }) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Paper img={sofaBg} element={<InfoTitle text={'order'} />} />

				<Box sx={{ my: '5rem' }}>
					<Container>
						<OrderForm areas={areas} />
					</Container>
				</Box>

			</main>
			<Footer />
		</>
	);
};

OrderPage.getInitialProps = async() => {
	const response = await fetchNovaPoschtaApi({
		modelName: "Address",
		calledMethod: "getAreas",
		methodProperties: {}
	});

	return {
		areas: response.data.map((area: any) => ({
			ref: area.Ref,
			name: area.Description,
		})),
	};
}

export default OrderPage;