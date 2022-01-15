import qs from 'qs';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Carousel, Navbar, Products, Title, Footer, Sidebar, MainSlide, Pagination } from '../../components';
import { fetchAPI, getFirstListItemPrice } from '../../lib/api';

import img1 from '../../media/carousel/1.png';
import img2 from '../../media/carousel/2.png';
import img3 from '../../media/carousel/3.png';
import { CategoryResponse, ColorResponse, ProductsListResponse } from '../../lib/apiResponse';
import { toCategoriesResponse, toColorsResponse, toProductsListResponse } from '../../lib/formatter';
import { useEffect, useState } from 'react';
import { FiltersProps } from '../../components/Sidebar';
import { useRouter } from 'next/router';

export interface ProductsPageProps {
	colors: Array<ColorResponse>,
	categories: Array<CategoryResponse>,
	minPrice: number;
	maxPrice: number;
}

const ProductsPage = (props: ProductsPageProps) => {
	const router = useRouter();
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(10);
	const [productsList, setProductsList] = useState<ProductsListResponse | null>(null);
	const [filters, setFilters] = useState<FiltersProps>({
		categories: null,
		colors: null,
		minPrice: null,
		maxPrice: null,
	});

	useEffect(() => {
		const queryPage = router.query.page;
		const pageStr: string | undefined = Array.isArray(queryPage) ? queryPage[0] : queryPage;

		if (pageStr) {
			setPage(parseInt(pageStr))
		}
	}, [router.query.page]);

	useEffect(() => {
		if (productsList?.products.meta.pagination.pageCount) {
			setPageCount(productsList?.products.meta.pagination.pageCount);
		}
	}, [productsList?.products.meta.pagination.pageCount]);

	useEffect(() => {
		const queryFilters: any = {};

		if (filters.colors?.length) {
			queryFilters.color = {
				id: {
					$in: filters.colors
				}
			}
		}

		if (filters.categories?.length) {
			queryFilters.category = {
				id: {
					$in: filters.categories
				}
			}
		}

		if (filters.minPrice !== null && filters.maxPrice !== null) {
			queryFilters.$or = [
				{
					price: {
						$between: [filters.minPrice, filters.maxPrice],
					},
				},
				{
					sale: {
						$between: [filters.minPrice, filters.maxPrice],
					},
				},
			]
		}

		const query = qs.stringify({
			filters: queryFilters,
			pagination: {
				page: page,
				rowsPerPage: 20,
			},
			populate: '*'
		})
		const url = `/products?${query}`;
		fetchAPI(url).then((response: any) => {
			setProductsList(toProductsListResponse(response));
		});
	}, [filters, page]);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Carousel
					Slide={MainSlide}
					content={[
						{
							title: 'Lorem ipsum dolor sit amet',
							description:
								'Lacus sed viverra tellus in hac habitasse. Sem nulla pharetra diam sit. Enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam. ',
							img: img1,
						},
						{
							title: 'Excepteur sint occaecat cupidatat',
							description:
								'Viverra nam libero justo laoreet sit amet cursus. Tincidunt vitae semper quis lectus nulla at volutpat diam. Nulla aliquet enim tortor at. Aliquet enim tortor at auctor urna nunc id cursus.',
							img: img2,
						},
						{
							title: 'Vulputate odio ut enim blandit volutpat',
							description:
								'Non consectetur a erat nam. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ante metus dictum at tempor.',
							img: img3,
						},
					]}
				/>

				<Box sx={{ my: '5rem' }}>
					<Container>
						<Title text={'Libero justo laoreet sit amet cursus'} />
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Sidebar {...props} filters={filters} setFilters={setFilters} />
							</Grid>
							<Grid item xs={8}>
								{
									productsList && (
										<Products products={productsList?.products.data} />
									)
								}
							</Grid>
						</Grid>
						<Box sx={{ mt: '4rem', display: 'flex', justifyContent: 'center' }}>
							<Pagination page={page} pageCount={pageCount} />
						</Box>
					</Container>
				</Box>
			</main>
			<Footer />
		</div>
	);
};

ProductsPage.getInitialProps = async (): Promise<ProductsPageProps> => {
	const colorsUrl = `/colors`;
	const colorsResponse = await fetchAPI(colorsUrl);
	const colors = toColorsResponse(colorsResponse);

	const categoriesUrl = `/categories`;
	const categoriesResponse = await fetchAPI(categoriesUrl);
	const categories = toCategoriesResponse(categoriesResponse);

	const minSale = await getFirstListItemPrice('sale:asc');
	const minPrice = await getFirstListItemPrice('price:asc') as number;

	const maxSale = await getFirstListItemPrice('sale:desc');
	const maxPrice = await getFirstListItemPrice('price:desc') as number;

	return {
		colors: colors.colors,
		categories: categories.categories,
		minPrice: Math.min(minPrice, minSale || minPrice),
		maxPrice: Math.min(maxPrice, maxSale || maxPrice),
	};
}

export default ProductsPage;
