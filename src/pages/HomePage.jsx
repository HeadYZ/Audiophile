import { Link, Outlet } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
export default function HomePage() {
	return (
		<>
			<Outlet />
			<header className={classes.header}>
				<div className={classes.header__wrapper}>
					<article className={classes.header__box}>
						<span className={classes.header__heading}>New product</span>
						<h1 className={classes.header__product}>XX99 mark II headphones</h1>
						<p className={classes['header__text-body']}>
							Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
						</p>
						<Button btn='1'>See product</Button>
					</article>
				</div>
			</header>
			<main>
				<section className={classes.products}>
					<ul className={classes.products__list}>
						<li className={classes['products__list-item']}>
							<img src='' alt='' />
							<h3>Headphones</h3>
							<Link>Shop</Link>
						</li>
						<li className={classes['products__list-item']}>
							<img src='' alt='' />
							<h3>Speakers</h3>
							<Link>Shop</Link>
						</li>
						<li className={classes['products__list-item']}>
							<img src='' alt='' />
							<h3>Earphones</h3>
							<Link>Shop</Link>
						</li>
					</ul>
				</section>
			</main>
		</>
	)
}
