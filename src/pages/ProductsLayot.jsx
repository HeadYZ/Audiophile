import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import ProductsHeader from '../components/Products/ProductsHeader.jsx'

export default function ProductsLayout() {
	const { pathname } = useLocation()
	const pathSegments = pathname.split('/').filter(segment => segment !== '')

	const isMainPage = pathSegments.length === 1 || (pathSegments.length === 2 && pathSegments[1] === 'cart')

	return (
		<>
			<Navigation />
			{isMainPage && <ProductsHeader title={pathSegments[0]} />}
			<main>
				<Outlet />
			</main>
		</>
	)
}
