import { Outlet } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
// import heroImage from '../assets/home/desktop/image-hero.jpg'
export default function HomePage() {
	return (
		<>
			<Outlet />
			<header className={classes.header}>
				<div className={classes.header__wrapper}>
					<article>
						<span className={classes.header__heading}>New product</span>
						<h1 className={classes.header__product}>XX99 mark II headphones</h1>
						<p className={classes['header__text-body']}>
							Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
						</p>
						<Button btn='1'>See product</Button>
					</article>
					<div className={classes.header__hero}>
						{/* <img src={heroImage} alt='XX99 mark II headphones' className={classes['header__hero-img']} /> */}
					</div>
				</div>
			</header>
		</>
	)
}
