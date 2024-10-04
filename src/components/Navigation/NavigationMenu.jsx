import Products from '../HomePage/Products.jsx'
import classes from './NavigationMenu.module.scss'
// eslint-disable-next-line react/prop-types
export default function NavigationMenu({ hideMenu }) {
	return (
		<>
			<div className={classes.nav__menu}>
				<Products onHide={hideMenu} />
			</div>
			<div className={classes.nav__backdrop} onClick={hideMenu}></div>
		</>
	)
}
