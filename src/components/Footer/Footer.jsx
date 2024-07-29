import FbIcon from '../../assets/home/shared/FbIcon.jsx'
import InstagramIcon from '../../assets/home/shared/InstagramIcon.jsx'
import TwitterIcon from '../../assets/home/shared/TwitterIcon.jsx'
import Logo from '../../assets/Logo.jsx'
import Navitems from '../Navigation/NavItems.jsx'
import classes from './Footer.module.scss'
export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__wrapper}>
				<div className={classes.footer__heading}>
					<Logo />
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
					Copyright 2021. All Rights Reserved
				</p>
				<div className={classes.footer__social}>
					<FbIcon />
					<TwitterIcon />
					<InstagramIcon />
				</div>
			</div>
		</footer>
	)
}
