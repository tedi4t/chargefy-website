export interface Product {
	id: string,
	title: string,
	description: string,
	price: number,
	sale?: number,
	characteristic: Record<string, string>,
	images: Array<{
		url: string,
		width: number,
		height: number,
	}>
}

export interface ProductsListResponse {
	products: {
		data: Array<{
			id: number,
			title: string,
			price: number,
			sale?: number,
			img: {
				url: string,
				width: number,
				height: number,
			}
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