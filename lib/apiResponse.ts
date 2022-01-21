export interface ImageResponse {
	url: string;
	width: number;
	height: number;
	alternativeText: string;
}

export interface Product {
	id: string,
	title: string,
	description: string,
	price: number,
	beforePrice?: number,
	characteristic: Record<string, string>,
	images: Array<ImageResponse>
}

export interface ProductsListResponse {
	products: {
		data: Array<{
			id: number,
			title: string,
			price: number,
			beforePrice?: number,
			mainImg: ImageResponse
		}>,
		meta: {
			pagination: {
				page: number,
				pageSize: number,
				pageCount: number,
				total: number,
			},
		},
	}
}

export interface TitleProductsListResponse {
	products: Array<{
		id: number;
		title: string;
		description: string;
		img: ImageResponse;
	}>
}

export interface ProductResponse {
	product: Product;
}

export interface ColorResponse {
	id: number;
	name: string;
}

export interface ColorsResponse {
	colors: Array<ColorResponse>
}

export interface CategoryResponse {
	id: number;
	name: string;
}

export interface CategoriesResponse {
	categories: Array<CategoryResponse>
}