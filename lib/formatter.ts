import { ProductsListResponse } from './apiResponse';
import { getStrapiMedia } from './api';

export const toProductsListResponse = (response: any): ProductsListResponse => {
	return {
		products: {
			data: response.data.map((product: any) => {
				const img = product.attributes.images.data[0].attributes.formats.medium;
				return {
					id: product.id,
					title: product.attributes.title,
					price: product.attributes.price,
					sale: product.attributes.sale,
					img: {
						url: getStrapiMedia(img.url),
						width: img.width,
						height: img.height,
					},
				};
			}),
			meta: response.meta,
		},
	};
}