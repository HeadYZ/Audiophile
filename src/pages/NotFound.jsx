/* eslint-disable react/no-unescaped-entities */
import Navigation from '../components/Navigation/Navigation.jsx'
import Link from '../UI/Link.jsx'
import classes from './NotFound.module.scss'

export default function NotFound() {
	return (
		<>
			<Navigation />
			<main className={classes.error}>
				<h1 className={classes.error__h1}>Unfortunately, we can't find the item you're looking for.</h1>
				<Link to={'/'} style={{ width: '100%', 'max-width': '30rem' }}>
					Return to the homepage
				</Link>
			</main>
		</>
	)
}
