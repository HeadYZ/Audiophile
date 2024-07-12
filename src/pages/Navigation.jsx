import { Link } from 'react-router-dom'
import IconCart from './assets/IconCart'
import Logo from './assets/Logo'
import HamburgerIcon from './assets/HamburgerIcon'
import classes from './Navigation.module.scss'
export default function Navigation() {
	return (
		<nav className={classes.nav}>
			<div className={classes.nav__wrapper}>
				<button className={classes.nav__btn}>
					<HamburgerIcon />
				</button>
				<div className={classes.nav__logo}>
					<Link to='/' className={classes.c}>
						<Logo />
					</Link>
				</div>
				<div className={classes.nav__cart}>
					<Link to='cart'>
						<IconCart />
					</Link>
				</div>
			</div>
		</nav>
	)
}

// Home
// Headphones
// Speakers
// Earphones