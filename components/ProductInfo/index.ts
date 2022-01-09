export interface ProductInfoProps {
	title: string;
	description: string;
	price: number;
	sale?: number;
	characteristic: Record<string, string>;
}

import ProductInfo from './ProductInfo';

export default ProductInfo;
