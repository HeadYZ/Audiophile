/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const CartContext = createContext({
	products: [],
	addProduct: () => {},
})

const initialCart = { products: [] }

export const CartContextProvider = ({ children }) => {
	const [cart, dispatchCart] = useReducer(cartReducer, initialCart)

	function cartReducer(state, action) {
		if (action.type === 'ADD_PRODUCT') {
			const updatedProducts = [...state.products]
			const productId = updatedProducts.findIndex(product => product.title === action.title)
			if (productId === -1) {
				updatedProducts.push({ title: action.title, quantity: +action.quantity, price: action.price })
			}
			if (productId >= 0) {
				updatedProducts[productId].quantity += +action.quantity
			}
			return { ...state, products: updatedProducts }
		}
		return { state }
	}

	const addProduct = ({ title, quantity, price }) => {
		dispatchCart({ type: 'ADD_PRODUCT', title, quantity, price })
	}

	return <CartContext.Provider value={{ products: cart.products, addProduct }}>{children}</CartContext.Provider>
}

export default CartContext
