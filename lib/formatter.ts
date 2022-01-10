import { ProductResponse, ProductsListResponse } from './apiResponse';
import { getStrapiMedia } from './api';

export const toProductsListResponse = (response: any): ProductsListResponse => {
	return {
		products: {
			data: response.data.map((product: any) => {
				const img = product.attributes.images.data[0].attributes.formats.small;
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

export const toProductResponse = (response: any): ProductResponse => {
	const product = response.data.attributes;
	const images = product.images.data;

	return {
		product: {
			id: response.data.id,
			title: product.title,
			description: product.description,
			price: product.price,
			sale: product.sale,
			characteristic: product.characteristic,
			images: images.map((image: any) => {
				const img = image.attributes.formats.small;
				return {
					url: getStrapiMedia(img.url),
					width: img.width,
					height: img.height,
				};
			}),
		},
	} as ProductResponse;
}