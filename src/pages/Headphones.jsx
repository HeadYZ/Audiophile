import { Outlet } from 'react-router-dom'
import ProductsPage from '../components/Products/ProductsPage.jsx'

export default function Headphones() {
	return (
		<>
			<Outlet />
			<ProductsPage productsTitle={'headphones'}></ProductsPage>
		</>
	)
}
