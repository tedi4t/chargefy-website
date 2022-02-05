import { useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { shoppingCartContext } from '../../contexts/shoppingCart';

export default function ShoppingCartChecker({ children }: any) {
	const [shoppingCart, dispatch] = useContext(shoppingCartContext);
	const key = 'shoppingCart';
	const [cookies, setCookie] = useCookies([key]);

	useEffect(() => {
		const shoppingCart: Array<any> = cookies[key] || [];
		if (dispatch) {
			shoppingCart.forEach(item => {
				dispatch({ type: 'addGood', payload: item });
			});
		}
	}, [dispatch, cookies]);

	useEffect(() => {
		setCookie(key, JSON.stringify(shoppingCart));
	}, [shoppingCart, setCookie]);

	return children;
}
