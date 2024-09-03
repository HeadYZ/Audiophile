/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const CartContext = createContext({
	products: [],
	totalPrice: 0,
	addProduct: () => {},
	removeProduct: () => {},
	updateProduct: () => {},
	removeProducts: () => {},
})

const initialCart = { products: [], totalPrice: 0 }

export const CartContextProvider = ({ children }) => {
	const [cart, dispatchCart] = useReducer(cartReducer, initialCart)

	function cartReducer(state, action) {
		if (action.type === 'ADD_PRODUCT') {
			const updatedProducts = [...state.products]
			const productId = updatedProducts.findIndex(product => product.title === action.title)
			let updatedTotalPrice = state.totalPrice
			const quantity = Number(action.quantity)
			const price = Number(action.price)

			if (productId === -1) {
				updatedProducts.push({
					title: action.title,
					quantity: quantity,
					price: price,
					cartIcon: action.cartIcon,
				})
			} else {
				updatedProducts[productId].quantity += quantity
			}

			updatedTotalPrice += price * quantity

			return { ...state, products: updatedProducts, totalPrice: updatedTotalPrice }
		}
		if (action.type === 'REMOVE_PRODUCT') {
			const updatedProducts = [...state.products]
			const productId = updatedProducts.findIndex(product => product.title === action.title)
			let updatedTotalPrice = state.totalPrice
			if (updatedProducts[productId].quantity === 1) {
				updatedTotalPrice = state.totalPrice - updatedProducts[productId].price
				updatedProducts.splice(productId, 1)
			} else if (updatedProducts[productId].quantity > 1) {
				updatedTotalPrice = state.totalPrice - updatedProducts[productId].price
				updatedProducts[productId].quantity -= 1
			}

			return { ...state, products: updatedProducts, totalPrice: updatedTotalPrice }
		}
		if (action.type === 'UPDATE_PRODUCT') {
			const updatedProducts = [...state.products]
			const productId = updatedProducts.findIndex(product => product.title === action.title)
			let updatedTotalPrice = state.totalPrice
			updatedTotalPrice -= updatedProducts[productId].quantity * updatedProducts[productId].price
			if (action.quantity) {
				updatedProducts[productId].quantity = Number(action.quantity)
			} else {
				updatedProducts[productId].quantity += 1
			}

			updatedTotalPrice += updatedProducts[productId].quantity * updatedProducts[productId].price

			return { ...state, products: updatedProducts, totalPrice: updatedTotalPrice }
		}
		if (action.type === 'REMOVE_PRODUCTS') {
			return { ...state, products: [], totalPrice: 0 }
		}
		return { ...state }
	}

	const addProduct = ({ title, quantity, price, cartIcon }) => {
		dispatchCart({ type: 'ADD_PRODUCT', title, quantity, price, cartIcon })
	}
	const removeProduct = ({ title }) => {
		dispatchCart({ type: 'REMOVE_PRODUCT', title })
	}
	const updateProduct = ({ title, quantity = false }) => {
		dispatchCart({ type: 'UPDATE_PRODUCT', title, quantity })
	}
	const removeProducts = () => {
		dispatchCart({ type: 'REMOVE_PRODUCTS' })
	}

	return (
		<CartContext.Provider
			value={{
				products: cart.products,
				addProduct,
				removeProduct,
				totalPrice: cart.totalPrice,
				updateProduct,
				removeProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContext
