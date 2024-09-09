import { Link, useLocation } from 'react-router-dom'
import IconCart from '../../../public/assets/IconCart.jsx'
import Logo from '../../../public/assets/Logo.jsx'
import HamburgerIcon from '../../../public/assets/HamburgerIcon.jsx'
import classes from './Navigation.module.scss'
import Navitems from './NavItems.jsx'

export default function Navigation() {
	const location = useLocation()
	const cartPath = location.pathname.endsWith('/cart')
		? location.pathname
		: location.pathname.endsWith('/')
		? `${location.pathname}cart`
		: `${location.pathname}/cart`

	return (
		<nav className={classes.nav}>
			<div className={classes.nav__wrapper}>
				<button className={classes.nav__btn} aria-label='Menu'>
					<HamburgerIcon />
				</button>
				<div className={classes.nav__logo}>
					<Link to='/' className={classes['nav__link-svg']} aria-label='Go to homepage'>
						<Logo />
					</Link>
				</div>

				<ul className={classes.nav__list}>
					<Navitems />
				</ul>

				<div className={classes.nav__cart}>
					<Link to={cartPath} className={classes['nav__link-svg']} aria-label='Go to cart'>
						<IconCart />
					</Link>
				</div>
			</div>
		</nav>
	)
}
