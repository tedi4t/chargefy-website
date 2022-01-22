import qs from 'qs';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
	Carousel,
	Navbar,
	Products,
	Title,
	Footer,
	Sidebar,
	MainSlide,
	Pagination,
	FilterBar,
	SidebarWrapper,
} from '../../components';
import { fetchAPI, getFirstListItemPrice } from '../../lib/api';

import {
	CategoryResponse,
	ColorResponse,
	ProductsListResponse,
	TitleProductsListResponse,
} from '../../lib/apiResponse';
import {
	toCategoriesResponse,
	toColorsResponse,
	toProductsListResponse,
	toTitleProductsListResponse,
} from '../../lib/formatter';
import { useEffect, useState } from 'react';
import { FiltersProps } from '../../components/Sidebar';
import { useRouter } from 'next/router';

export interface ProductsPageProps {
	colors: Array<ColorResponse>;
	categories: Array<CategoryResponse>;
	minPrice: number;
	maxPrice: number;
	title: TitleProductsListResponse;
}

const ProductsPage = (props: ProductsPageProps) => {
	const router = useRouter();
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(10);
	const [productsList, setProductsList] = useState<ProductsListResponse | null>(null);
	const [sorting, setSorting] = useState<string | undefined>();
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
			setPage(parseInt(pageStr));
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
					$in: filters.colors,
				},
			};
		}

		if (filters.categories?.length) {
			queryFilters.category = {
				id: {
					$in: filters.categories,
				},
			};
		}

		if (filters.minPrice !== null && filters.maxPrice !== null) {
			queryFilters.price = {
				$between: [filters.minPrice, filters.maxPrice],
			};
		}

		const query = qs.stringify({
			filters: queryFilters,
			pagination: {
				page: page,
				rowsPerPage: 20,
			},
			sort: sorting ? [sorting] : [],
			populate: '*',
		});
		const url = `/products?${query}`;
		fetchAPI(url).then((response: any) => {
			setProductsList(toProductsListResponse(response));
		});
	}, [filters, page, sorting]);

	return (
		<div>
			<Head>
				<title>Магнітний тримач | Chargefy</title>
				<meta
					name='description'
					content='Стильний автомобільний тримач для телефону забезпечує сильне та надійне кріплення телефону, а розширені металеві пластини додатково підсилюють магнітну силу. Також є тримачі з безпровідною зарядкою які швидко зарядять ваш телефон.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Carousel Slide={MainSlide} content={props.title.products} />

				<Box sx={{ display: { xs: 'block', md: 'none' } }}>
					<FilterBar {...props} setFilters={setFilters} sorting={sorting} setSorting={setSorting} />
				</Box>

				<Box sx={{ mt: { xs: '0', md: '5rem' }, mb: { xs: '2rem', md: '5rem' } }}>
					<Container>
						<Box sx={{ mt: { xs: '0', md: '4rem' } }}>
							<Grid container spacing={2}>
								<Grid item xs={0} md={3}>
									<SidebarWrapper sx={{ display: { xs: 'none', md: 'block' } }}>
										<Sidebar {...props} setFilters={setFilters} />
									</SidebarWrapper>
								</Grid>
								<Grid item xs={12} md={9}>
									{productsList && <Products products={productsList?.products.data} />}
								</Grid>
							</Grid>
						</Box>
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

	const minPrice = (await getFirstListItemPrice('price:asc')) as number;
	const maxPrice = (await getFirstListItemPrice('price:desc')) as number;

	const queryTitle = qs.stringify({
		filters: {
			isTitle: {
				$eq: true,
			},
		},
		populate: '*',
	});

	const url = '/products?';
	const titleUrl = `${url}${queryTitle}`;

	const titleResponse = await fetchAPI(titleUrl);

	const titleProducts = toTitleProductsListResponse(titleResponse);

	return {
		colors: colors.colors,
		categories: categories.categories,
		minPrice,
		maxPrice,
		title: titleProducts,
	};
};

export default ProductsPage;
