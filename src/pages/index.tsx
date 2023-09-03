import Head from 'next/head';
import qs from 'qs';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Carousel, Navbar, Paper, Info, Products, Title, Footer, MainSlide } from '../components';

import banner from '../../media/banner/main.jpeg';
import { fetchAPI } from '../lib/api';
import { ProductsListResponse, TitleProductsListResponse } from '../lib/apiResponse';
import { toProductsListResponse, toTitleProductsListResponse } from '../lib/formatter';
import { useIntl } from 'react-intl';
import { NextPageContext } from 'next';

const Home = ({
	popular,
	recommend,
	title,
}: {
	popular: ProductsListResponse;
	recommend: ProductsListResponse;
	title: TitleProductsListResponse;
}) => {
	const intl = useIntl();

	return (
		<div>
			<Head>
				<title>{intl.formatMessage({ id: 'index.title' })}</title>
				<meta name='description' content={intl.formatMessage({ id: 'index.description' })} />
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
						<Title text={intl.formatMessage({ id: 'index.popular.title' })} />
						<Products products={popular.products.data} />
					</Container>
				</Box>

				<Paper
					img={banner}
					element={
						<Info
							title={intl.formatMessage({ id: 'index.sale.title' })}
							description={intl.formatMessage({ id: 'index.sale.description' })}
							price={15}
							link={'/products'}
						/>
					}
				/>

				<Box sx={{ mb: { xs: '2rem', md: '4rem' } }}>
					<Container>
						<Title text={intl.formatMessage({ id: 'index.recommended.title' })} />
						<Products products={recommend.products.data} />
					</Container>
				</Box>
			</main>

			<Footer />
		</div>
	);
};

Home.getInitialProps = async (ctx: NextPageContext) => {
	const queryPopular = qs.stringify({
		filters: {
			isPopular: {
				$eq: true,
			},
		},
		populate: '*',
		locale: ctx.locale || 'en',
	});

	const queryRecommend = qs.stringify({
		filters: {
			isRecommend: {
				$eq: true,
			},
		},
		populate: '*',
		locale: ctx.locale || 'en',
	});

	const queryTitle = qs.stringify({
		filters: {
			isTitle: {
				$eq: true,
			},
		},
		populate: '*',
		locale: ctx.locale || 'en',
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
