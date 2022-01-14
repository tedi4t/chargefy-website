import Grid from '@mui/material/Grid';

import Product, { ProductProps } from '../Product/Product';

export interface ProductsProps {
	products: Array<ProductProps>;
}

export default function Products (props: ProductsProps) {
	return (
		<Grid container spacing={2} justifyContent={'center'}>
			{props.products.map((product: ProductProps) => (
				<Grid item key={product.title}>
					<Product {...product} key={product.title} />
				</Grid>
			))}
		</Grid>
	);
}
