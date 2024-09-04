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

const getInitialCart = () => {
	const storedCart = localStorage.getItem('cart')
	return storedCart ? JSON.parse(storedCart) : { products: [], totalPrice: 0 }
}

export const CartContextProvider = ({ children }) => {
	const [cart, dispatchCart] = useReducer(cartReducer, getInitialCart())

	function cartReducer(state, action) {
		let updatedProducts = [...state.products]
		let updatedTotalPrice = state.totalPrice

		if (action.type === 'ADD_PRODUCT') {
			const productId = updatedProducts.findIndex(product => product.title === action.title)
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
		} else if (action.type === 'REMOVE_PRODUCT') {
			const productId = updatedProducts.findIndex(product => product.title === action.title)

			if (updatedProducts[productId].quantity === 1) {
				updatedTotalPrice -= updatedProducts[productId].price
				updatedProducts.splice(productId, 1)
			} else if (updatedProducts[productId].quantity > 1) {
				updatedTotalPrice -= updatedProducts[productId].price
				updatedProducts[productId].quantity -= 1
			}
		} else if (action.type === 'UPDATE_PRODUCT') {
			const productId = updatedProducts.findIndex(product => product.title === action.title)
			updatedTotalPrice -= updatedProducts[productId].quantity * updatedProducts[productId].price

			if (action.quantity) {
				updatedProducts[productId].quantity = Number(action.quantity)
			} else {
				updatedProducts[productId].quantity += 1
			}

			updatedTotalPrice += updatedProducts[productId].quantity * updatedProducts[productId].price
		} else if (action.type === 'REMOVE_PRODUCTS') {
			updatedProducts = []
			updatedTotalPrice = 0
		}

		const updatedCart = { products: updatedProducts, totalPrice: updatedTotalPrice }
		localStorage.setItem('cart', JSON.stringify(updatedCart))

		return updatedCart
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
