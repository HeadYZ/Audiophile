import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import ProductsHeader from '../components/Products/ProductsHeader.jsx'
export default function ProductsLayout() {
	const { pathname } = useLocation()
	const mainPageProducts = pathname.split('/').filter(word => word !== '')
	return (
		<>
			<Navigation />
			{mainPageProducts.length === 1 && <ProductsHeader title={mainPageProducts[0]} />}
			<main>
				<Outlet />
			</main>
		</>
	)
}
