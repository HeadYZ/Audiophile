import { Link, Outlet, useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
import earphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-earphones.png'
import speakersImg from '../assets/home/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-headphones.png'
import ArrowRightIcon from '../assets/home/shared/desktop/ArrowRight.svg'
import zx9Img from '../assets/home/mobile/image-speaker-zx9.png'
import zx7Img from '../assets/home/mobile/image-speaker-zx7.jpg'
import yx1Img from '../assets/home/mobile/image-earphones-yx1.jpg'
import patternCircles from '../assets/home/desktop/pattern-circles.svg'

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
				<section className={classes.trendy}>
					<div className={classes.trendy__wrapper}>
						<div className={`${classes.trendy__box} ${classes['trendy__box--first']}`}>
							<img src={patternCircles} alt='' className={classes.trendy__circles} />
							<img src={zx9Img} alt='ZX9 speaker' className={classes['trendy__img--1']} />
							<h2 className={`${classes.trendy__heading} ${classes['trendy__heading--first']}`}>
								ZX9
								<br />
								speaker
							</h2>
							<p className={classes.trendy__text}>
								Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
							</p>

							<Link className={classes.trendy__link}>See product</Link>
						</div>
						<div className={`${classes.trendy__box} ${classes['trendy__box-info']}  ${classes['trendy__box--second']}`}>
							<img src={zx7Img} alt='ZX7 speaker' className={`${classes.trendy__img} ${classes['trendy__img--2']}`} />

							<h2 className={`${classes.trendy__heading} ${classes['trendy__heading--second']}`}>ZX7 speaker</h2>
							<Button btn='2'>
								<Link>See product</Link>
							</Button>
						</div>
						<div className={`${classes.trendy__box} ${classes['trendy__box--third']}`}>
							<div className={classes['trendy__img--radius']}>
								<img src={yx1Img} alt='YX1 earphones' className={classes.trendy__img} />
							</div>
							<div className={`${classes['trendy__box-info']} ${classes['trendy__box-info--second']}`}>
								<h2 className={`${classes.trendy__heading} ${classes['trendy__heading--second']}`}>YX1 earphones</h2>
								<Button btn='2'>
									<Link>See product</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
