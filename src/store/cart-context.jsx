/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const CartContext = createContext({
	products: [],
	addProduct: () => {},
})

export const CartContextProvider = ({ children }) => {
	const initialCart = { products: [] }
	const cartReducer = (state, action) => {
		if (action.type === 'ADD_PRODUCT') {
			console.log(action.title)
			console.log(action.quantity)
			return { ...state }
		}
		return { state }
	}
	const [cart, dispatchCart] = useReducer(cartReducer, initialCart)

	const addProduct = ({ title, quantity }) => {
		dispatchCart({ type: 'ADD_PRODUCT', title, quantity })
	}

	return <CartContext.Provider value={{ products: cart.products, addProduct }}>{children}</CartContext.Provider>
}

export default CartContext
