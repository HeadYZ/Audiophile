import { Outlet } from 'react-router-dom'
import ProductsPage from '../components/Products/ProductsPage.jsx'

export default function Headphones() {
	return (
		<>
			<ProductsPage productsTitle={'headphones'}></ProductsPage>
			<Outlet />
		</>
	)
}
