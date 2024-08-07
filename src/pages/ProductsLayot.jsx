import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'

export default function ProductsLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	)
}
