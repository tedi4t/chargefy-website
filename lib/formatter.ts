import {
	CategoriesResponse,
	ColorsResponse,
	ImageResponse,
	ProductResponse,
	ProductsListResponse, TitleProductsListResponse,
} from './apiResponse';
import { getStrapiMedia } from './api';

export const toImageResponse = (image: any): ImageResponse => {
	return {
		url: getStrapiMedia(image.url),
		width: image.width,
		height: image.height,
	}
}

export const toProductsListResponse = (response: any, size: string = 'small'): ProductsListResponse => {
	return {
		products: {
			data: response.data.map((product: any) => {
				const mainImg = product.attributes.mainImage.data.attributes.formats[size] || product.attributes.mainImage.data.attributes;
				return {
					id: product.id,
					title: product.attributes.title,
					price: product.attributes.price,
					beforePrice: product.attributes.beforePrice,
					mainImg: toImageResponse(mainImg),
				};
			}),
			meta: response.meta,
		},
	};
}

export const toTitleProductsListResponse = (response: any): TitleProductsListResponse => {
	return {
		products: response.data.map((product: any) => {
			const img = product.attributes.mainImage.data.attributes;
			const attributes = product.attributes;

			return {
				id: product.id,
				title: attributes.title,
				description: attributes.shortDescription,
				img: toImageResponse(img),
			}
		}),
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
			beforePrice: product.beforePrice,
			characteristic: product.characteristic,
			images: [product.mainImage.data, ...images].map((image: any) => {
				const img = image.attributes.formats.medium || image.attributes;
				return {
					url: getStrapiMedia(img.url),
					width: img.width,
					height: img.height,
				};
			}),
		},
	} as ProductResponse;
}

export const toColorsResponse = (response: any): ColorsResponse => {
	return {
		colors: response.data.map((color: any) => ({
			id: color.id,
			name: color.attributes.name,
		}))
	}
}

export const toCategoriesResponse = (response: any): CategoriesResponse => {
	return {
		categories: response.data.map((category: any) => ({
			id: category.id,
			name: category.attributes.name,
		}))
	}
}