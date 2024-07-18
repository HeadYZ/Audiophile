import { Link, Outlet, useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
import earphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-earphones.png'
import speakersImg from '../assets/home/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-headphones.png'
import ArrowRightIcon from '../assets/home/shared/desktop/ArrowRight.svg'
export default function HomePage() {
	const navigate = useNavigate()
	function navToEarphones() {
		navigate('/earphones')
	}

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
							<div className={classes['products__list-item-top']}>
								<img
									src={headphonesImg}
									alt=''
									className={`${classes['products__list-img']} ${classes['products__list-img--1']}`}
								/>
							</div>

							<div className={classes['products__list-box']}>
								<h3 className={classes['products__list-item-heading']}>Headphones</h3>
								<Link className={classes['products__list-item-link']}>
									<span>Shop</span>
									<img src={ArrowRightIcon} alt='' />
								</Link>
							</div>
						</li>
						<li className={classes['products__list-item']}>
							<div className={classes['products__list-item-top']}>
								<img
									src={speakersImg}
									alt=''
									className={`${classes['products__list-img']} ${classes['products__list-img--2']}`}
								/>
							</div>

							<div className={classes['products__list-box']}>
								<h3 className={classes['products__list-item-heading']}>Speakers</h3>
								<Link className={classes['products__list-item-link']}>
									<span>Shop</span>
									<img src={ArrowRightIcon} alt='' />
								</Link>
							</div>
						</li>
						<li className={classes['products__list-item']} onClick={navToEarphones}>
							<div className={classes['products__list-item-top']}>
								<img
									src={earphonesImg}
									alt=''
									className={`${classes['products__list-img']} ${classes['products__list-img--3']}`}
								/>
							</div>
							<div className={classes['products__list-box']}>
								<h3 className={classes['products__list-item-heading']}>Earphones</h3>
								<Link to='earphones' className={classes['products__list-item-link']}>
									<span>Shop</span>
									<img src={ArrowRightIcon} alt='' />
								</Link>
							</div>
						</li>
					</ul>
				</section>
			</main>
		</>
	)
}
{
	/* <div className={`${classes['products__list-item-top']} ${classes['products__list-item-top--last']}`}></div> */
}
