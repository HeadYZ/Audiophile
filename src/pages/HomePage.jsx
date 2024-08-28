import { Outlet } from 'react-router-dom'

import Products from '../components/HomePage/Products.jsx'
import Header from '../components/HomePage/Header.jsx'
import Trendy from '../components/HomePage/Trendy.jsx'
import Info from '../components/HomePage/Info.jsx'
export default function HomePage() {
	return (
		<>
			<Header />
			<Outlet />
			<main>
				<Products />
				<Trendy />
				<Info />
			</main>
		</>
	)
}
