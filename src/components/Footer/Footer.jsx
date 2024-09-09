import { Link } from 'react-router-dom'
import FbIcon from '../../../public/assets/shared/FbIcon.jsx'
import InstagramIcon from '../../../public/assets/shared/InstagramIcon.jsx'
import TwitterIcon from '../../../public/assets/shared/TwitterIcon.jsx'
import Logo from '../../../public/assets/Logo.jsx'
import Navitems from '../Navigation/NavItems.jsx'
import classes from './Footer.module.scss'
export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__wrapper}>
				<div className={classes.footer__heading}>
					<Link to='/' className={classes.footer__link}>
						<Logo />
					</Link>
					<ul className={classes.footer__list}>
						<Navitems />
					</ul>
				</div>
				<p className={classes.footer__text}>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
					facility - we’re open 7 days a week.
				</p>
				<p className={`${classes.footer__text} ${classes['footer__text--bold']}`}>
					Copyright 2024. All Rights Reserved
				</p>
				<div className={classes.footer__social}>
					<a href='' className={classes.footer__link}>
						<FbIcon />
					</a>
					<a href='' className={classes.footer__link}>
						<TwitterIcon />
					</a>

					<a href='' className={classes.footer__link}>
						<InstagramIcon />
					</a>
				</div>
			</div>
		</footer>
	)
}
