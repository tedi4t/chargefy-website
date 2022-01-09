import { useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { shoppingCartContext } from '../../contexts/shoppingCart';

export default ({ children }: any) => {
	const [shoppingCart, dispatch] = useContext(shoppingCartContext);
	const [cookies, setCookie] = useCookies(['shoppingCart']);

	useEffect(() => {
		const shoppingCart: Array<any> = cookies['shoppingCart'] || [];
		if(dispatch) {
			shoppingCart.forEach(item => {
				dispatch({ type: 'addGood', payload: item });
			})
		}
	}, [dispatch]);

	useEffect(() => {
		setCookie('shoppingCart', JSON.stringify(shoppingCart));
	}, [shoppingCart])

	return children;
}