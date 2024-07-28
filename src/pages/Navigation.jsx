import { Link } from 'react-router-dom'
import IconCart from '../assets/IconCart'
import Logo from '../assets/Logo.jsx'
import HamburgerIcon from '../assets/HamburgerIcon'
import classes from './Navigation.module.scss'
import Navitems from '../components/Navigation/NavItems.jsx'
export default function Navigation() {
	return (
		<nav className={classes.nav}>
			<div className={classes.nav__wrapper}>
				<button className={classes.nav__btn}>
					<HamburgerIcon />
				</button>
				<div className={classes.nav__logo}>
					<Link to='/' className={classes['nav__link-svg']}>
						<Logo />
					</Link>
				</div>

				<ul className={classes.nav__list}>
					<Navitems />
				</ul>

				<div className={classes.nav__cart}>
					<Link to='cart' className={classes['nav__link-svg']}>
						<IconCart />
					</Link>
				</div>
			</div>
		</nav>
	)
}
