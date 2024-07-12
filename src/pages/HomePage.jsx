import { Outlet } from 'react-router-dom'

export default function HomePage() {
	return (
		<>
			<Outlet />
			<section>
				<p>cos z zycia</p>
			</section>
		</>
	)
}
