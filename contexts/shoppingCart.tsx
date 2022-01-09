import React, { createContext, Dispatch, useReducer } from 'react';
import { Product } from '../lib/apiResponse';

export interface ShoppingCartItem {
	product: Product;
	quantity: number;
}

type ActionType = 'addGood' | 'updateQuantity' | 'removeGood' | 'clearState';

export interface Action {
	type: ActionType;
	payload: ShoppingCartItem;
}

type ShoppingCart = Array<ShoppingCartItem>;

const reducer = (state: ShoppingCart, action: Action): ShoppingCart => {
	const actions: Record<string, () => ShoppingCart> = {
		addGood: () => {
			const result = [...state, action.payload];
			return result;
		},
		updateQuantity: () => {
			const {
				product: { id },
				quantity,
			} = action.payload;
			const newState = [];
			for (const element of state) {
				if (element.product.id === id) {
					newState.push({ ...element, quantity });
				} else {
					newState.push({ ...element });
				}
			}
			return newState;
		},
		removeGood: () => {
			const newState: ShoppingCart = [];
			const {
				product: { id },
			} = action.payload;
			for (const element of state) {
				if (element.product.id !== id) {
					newState.push(element);
				}
			}
			return newState;
		},
		clearState: () => [],
	};
	return actions[action.type]();
};

export const shoppingCartContext = createContext<[ShoppingCart, Dispatch<Action>] | [null, null]>([
	null,
	null,
]);

export const ShoppingCartProvider = ({ children }: any) => {
	const value = useReducer(reducer, []);

	return <shoppingCartContext.Provider value={value}>{children}</shoppingCartContext.Provider>;
};
