import { Link, Outlet, useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import classes from './HomePage.module.scss'
import earphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-earphones.png'
import speakersImg from '../assets/home/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesImg from '../assets/home/shared/desktop/image-category-thumbnail-headphones.png'
import ArrowRightIcon from '../assets/home/shared/desktop/ArrowRight.svg'
import zx9Img from '../assets/home/mobile/image-speaker-zx9.png'
import patternCircles from '../assets/home/desktop/pattern-circles.svg'
import zx9ImgDesktop from '../assets/home/desktop/image-speaker-zx9.png'
import manMobileImg from '../assets/home/shared/mobile/image-best-gear.jpg'
import manTabletImg from '../assets/home/shared/tablet/image-best-gear.jpg'
import manDesktopImg from '../assets/home/shared/desktop/image-best-gear.jpg'

export default function HomePage() {
	const navigate = useNavigate()
	function navToEarphones() {
		navigate('/earphones')
	}
	console.log(manDesktopImg)
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
							<picture>
								<source media='(min-width: 1440px)' srcSet={zx9ImgDesktop} />
								<img src={zx9Img} alt='ZX9 speaker' className={classes['trendy__img--1']} />
							</picture>

							<img src={patternCircles} alt='' className={classes.trendy__circles} />
							<div className={classes['trendy__box-content']}>
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
						</div>
						<div className={`${classes.trendy__box} ${classes['trendy__box-info']}  ${classes['trendy__box--second']}`}>
							<h2 className={`${classes.trendy__heading} ${classes['trendy__heading--second']}`}>ZX7 speaker</h2>
							<Button btn='2'>
								<Link>See product</Link>
							</Button>
						</div>
						<div className={`${classes.trendy__box} ${classes['trendy__box--third']}`}>
							<div className={classes['trendy__img--3']}></div>
							<div className={`${classes['trendy__box-info']} ${classes['trendy__box-info--second']}`}>
								<h2 className={`${classes.trendy__heading} ${classes['trendy__heading--second']}`}>YX1 earphones</h2>
								<Button btn='2'>
									<Link>See product</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className={classes.info}>
					<div className={classes.info__wrapper}>
						<picture className={classes.info__picture}>
							<source media='(min-width: 768px) and (max-width: 992px )' srcSet={manTabletImg} />
							<source media='(min-width: 992px)' srcSet={manDesktopImg} />
							<img
								src={manMobileImg}
								alt='Man wearing earphones listening to music'
								className={classes['info__picture-img']}
							/>
						</picture>

						<div className={classes.info__box}>
							<h2 className={classes.info__heading}>
								Bringing you the <span>best</span> audio gear
							</h2>
							<p className={classes.info__text}>
								Located at the heart of New York City, Audiophile is the premier store for high end headphones,
								earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
								available for you to browse and experience a wide range of our products. Stop by our store to meet some
								of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
