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
					<Link to='/' className={classes.nav__link}>
						<Logo />
					</Link>
				</div>

				<ul className={classes.nav__list}>
					<li>
						<Link className={classes['nav__list-item']}>Home</Link>
					</li>
					<li>
						<Link className={classes['nav__list-item']}>Headphones</Link>
					</li>
					<li>
						<Link className={classes['nav__list-item']}>Speakers</Link>
					</li>
					<li>
						<Link className={classes['nav__list-item']}>Earphones</Link>
					</li>
				</ul>

				<div className={classes.nav__cart}>
					<Link to='cart'>
						<IconCart />
					</Link>
				</div>
			</div>
		</nav>
	)
}
