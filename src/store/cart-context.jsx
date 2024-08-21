import { createContext } from 'react'

const CartContext = createContext({
	products: [],
})

export const CartContextProvider = ({ children }) => {
	return <CartContext.Provider value={{ products: [] }}>{children}</CartContext.Provider>
}
export default CartContext
