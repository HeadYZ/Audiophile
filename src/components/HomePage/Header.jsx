import Button from '../../UI/Button'
import classes from './Header.module.scss'
// import heroImg from '../../assets/home/desktop/image-hero.jpg'
export default function Header() {
	return (
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
				{/* <img src='' alt='' /> */}
			</div>
			<div className={classes.header__bg}></div>
		</header>
	)
}
