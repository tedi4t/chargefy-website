export interface ProductInfoProps {
	title: string;
	description: string;
	price: number;
	beforePrice?: number;
	characteristic: Record<string, string>;
}

import ProductInfo from './ProductInfo';

export default ProductInfo;
