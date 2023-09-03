import qs from 'qs';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import {
	Carousel,
	Navbar,
	Products,
	Footer,
	Sidebar,
	MainSlide,
	Pagination,
	FilterBar,
	SidebarWrapper,
	Sorting,
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
import { useIntl } from 'react-intl';
import { NextPageContext } from 'next';

export interface ProductsPageProps {
	colors: Array<ColorResponse>;
	categories: Array<CategoryResponse>;
	minPrice: number;
	maxPrice: number;
	title: TitleProductsListResponse;
}

const ProductsPage = (props: ProductsPageProps) => {
	const router = useRouter();
	const intl = useIntl();
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(6);
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
		const categoriesQuery = router.query.categories;
		const categoriesStr: Array<string> = categoriesQuery
			? Array.isArray(categoriesQuery)
				? categoriesQuery
				: [categoriesQuery]
			: [];
		const categories = categoriesStr.map(category => parseInt(category));

		setFilters(filters => {
			const existingCategories = filters.categories || [];
			return {
				...filters,
				categories: Array.from(new Set([...existingCategories, ...categories])),
			};
		});
	}, [router.query.categories]);

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
				$between: [filters.minPrice, filters.maxPrice].map(Math.floor),
			};
		}

		const query = qs.stringify({
			filters: queryFilters,
			pagination: {
				page: page,
				pageSize: 15,
			},
			sort: sorting ? [sorting] : [],
			populate: '*',
			locale: router.locale || 'en',
		});
		const url = `/products?${query}`;
		fetchAPI(url).then((response: any) => {
			setProductsList(toProductsListResponse(response));
		});
	}, [filters, page, sorting, router.locale]);

	return (
		<div>
			<Head>
				<title>{intl.formatMessage({ id: 'products.title' })}</title>
				<meta name='description' content={intl.formatMessage({ id: 'products.description' })} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />

				<Box sx={{ display: { xs: 'none', md: 'block' } }}>
					<Carousel Slide={MainSlide} content={props.title.products} />
				</Box>

				<Box sx={{ display: { xs: 'block', md: 'none' }, mt: { xs: '5rem', md: 0 } }}>
					<FilterBar
						{...props}
						filters={filters}
						setFilters={setFilters}
						sorting={sorting}
						setSorting={setSorting}
					/>
				</Box>

				<Box sx={{ mt: { xs: '0', md: '5rem' }, mb: { xs: '2rem', md: '5rem' } }}>
					<Container>
						<Box sx={{ mt: { xs: '0', md: '4rem' } }}>
							<Grid container spacing={2}>
								<Grid item xs={0} md={3}>
									<SidebarWrapper sx={{ display: { xs: 'none', md: 'block' } }}>
										<Sidebar {...props} filters={filters} setFilters={setFilters} />
									</SidebarWrapper>
								</Grid>
								<Grid item xs={12} md={9}>
									<Box
										sx={{
											display: { xs: 'none', md: 'block' },
											mb: '2rem',
											pl: '2rem',
											pt: '1rem',
										}}
									>
										<Sorting sorting={sorting} setSorting={setSorting} />
									</Box>
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

ProductsPage.getInitialProps = async (ctx: NextPageContext): Promise<ProductsPageProps> => {
	const colorsUrl = `/colors?`;
	const colorsQuery = qs.stringify({
		populate: '*',
		locale: ctx.locale || 'en',
	});

	const colorsResponse = await fetchAPI(`${colorsUrl}${colorsQuery}`);
	const colors = toColorsResponse(colorsResponse);

	const categoriesUrl = `/categories?`;
	const categoriesQuery = qs.stringify({
		populate: '*',
		locale: ctx.locale || 'en',
	});

	const categoriesResponse = await fetchAPI(`${categoriesUrl}${categoriesQuery}`);
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
		locale: ctx.locale || 'en',
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
