import { getStrapiMedia } from './api';

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
			},
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
	product: {
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
}