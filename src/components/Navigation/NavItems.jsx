import { Link } from 'react-router-dom'
import classes from './NavItems.module.scss'
export default function Navitems() {
	return (
		<>
			<li>
				<Link className={classes['nav__list-item']} to='/'>
					Home
				</Link>
			</li>
			<li>
				<Link to='/headphones' className={classes['nav__list-item']}>
					Headphones
				</Link>
			</li>
			<li>
				<Link to='/speakers' className={classes['nav__list-item']}>
					Speakers
				</Link>
			</li>
			<li>
				<Link to='/earphones' className={classes['nav__list-item']}>
					Earphones
				</Link>
			</li>
		</>
	)
}
