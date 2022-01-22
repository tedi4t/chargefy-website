import Head from 'next/head';
import qs from 'qs';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Carousel, Navbar, Paper, Info, Products, Title, Footer, MainSlide } from '../components';

import banner from '../media/banner/main.jpeg';
import { fetchAPI } from '../lib/api';
import { ProductsListResponse, TitleProductsListResponse } from '../lib/apiResponse';
import { toProductsListResponse, toTitleProductsListResponse } from '../lib/formatter';

const Home = ({
	popular,
	recommend,
	title,
}: {
	popular: ProductsListResponse;
	recommend: ProductsListResponse;
	title: TitleProductsListResponse;
}) => {
	return (
		<div>
			<Head>
				<title>Автомобільна зарядка | Chargefy</title>
				<meta
					name='description'
					content='Стильні автомобільні тримувач для телефону забезпечують сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу.'
				/>
				<link rel='icon' href='/favicon.ico' />

				<meta
					name='google-site-verification'
					content='c9x12pPL48BJUGucRAlZMWDnoC0asWeSj2wiVC0GU1Q'
				/>
				<meta
					name='google-site-verification'
					content='Fllf2vlWaN50hobrJyv8-G-_AweAvE_mu76wrNTpuck'
				/>
			</Head>

			<main>
				<Navbar />

				<Carousel Slide={MainSlide} content={title.products} />

				<Box sx={{ mb: { xs: '2rem', md: '4rem' } }}>
					<Container>
						<Title text={'Популярні'} />
						<Products products={popular.products.data} />
					</Container>
				</Box>

				<Paper
					img={banner}
					element={
						<Info
							title={'Товари за акційною ціною'}
							description={
								'Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.'
							}
							price={149}
							link={'/products'}
						/>
					}
				/>

				<Box sx={{ mb: { xs: '2rem', md: '4rem' } }}>
					<Container>
						<Title text={'Рекомендовані'} />
						<Products products={recommend.products.data} />
					</Container>
				</Box>
			</main>

			<Footer />
		</div>
	);
};

Home.getInitialProps = async () => {
	const queryPopular = qs.stringify({
		filters: {
			isPopular: {
				$eq: true,
			},
		},
		populate: '*',
	});

	const queryRecommend = qs.stringify({
		filters: {
			isRecommend: {
				$eq: true,
			},
		},
		populate: '*',
	});

	const queryTitle = qs.stringify({
		filters: {
			isTitle: {
				$eq: true,
			},
		},
		populate: '*',
	});

	const url = '/products?';
	const popularUrl = `${url}${queryPopular}`;
	const recommendUrl = `${url}${queryRecommend}`;
	const titleUrl = `${url}${queryTitle}`;

	const popularResponse = await fetchAPI(popularUrl);
	const recommendResponse = await fetchAPI(recommendUrl);
	const titleResponse = await fetchAPI(titleUrl);

	const popularProducts = toProductsListResponse(popularResponse);
	const recommendProducts = toProductsListResponse(recommendResponse);
	const titleProducts = toTitleProductsListResponse(titleResponse);

	return {
		popular: popularProducts,
		recommend: recommendProducts,
		title: titleProducts,
	};
};

export default Home;
