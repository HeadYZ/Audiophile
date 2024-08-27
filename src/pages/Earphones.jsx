import { Outlet } from 'react-router-dom'
import ProductsPage from '../components/Products/ProductsPage.jsx'

export default function Earphones() {
	return (
		<>
			<Outlet />
			<ProductsPage productsTitle={'earphones'}></ProductsPage>
		</>
	)
}
