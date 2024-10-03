import Navigation from '../Navigation/Navigation'
import classes from './Header.module.scss'
import heroImg from '/assets/home/tablet/image-header.jpg'
import Link from '../../UI/Link.jsx'
export default function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.header__wrapper}>
				<Navigation />
				<article className={classes.header__box}>
					<span className={classes.header__heading}>New product</span>
					<h1 className={classes.header__product}>XX99 mark II headphones</h1>
					<p className={classes['header__text-body']}>
						Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
					</p>
					<Link to='headphones/XX99MarkII' style={{ width: '16rem' }}>
						See product
					</Link>
				</article>
				<img src={heroImg} alt='XX99 Mark II headophones' className={classes.header__img} />
			</div>
		</header>
	)
}
