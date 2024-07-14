import { Outlet } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
export default function HomePage() {
	return (
		<>
			<Outlet />
			<header>
				<div>
					<span>New product</span>
					<h1>XX99 mark II headphones</h1>
					<p>
						Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
					</p>
					<Button btn='1'>See product</Button>
				</div>
			</header>
		</>
	)
}
