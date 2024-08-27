import { Outlet } from 'react-router-dom'
import ProductsPage from '../components/Products/ProductsPage.jsx'

export default function Speakers() {
	return (
		<>
			<Outlet />
			<ProductsPage productsTitle={'speakers'}></ProductsPage>
		</>
	)
}
