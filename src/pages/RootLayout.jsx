import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function RootLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	)
}
