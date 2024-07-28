import classes from './Trendy.module.scss'
import zx9Img from '../../assets/home/mobile/image-speaker-zx9.png'
import patternCircles from '../../assets/home/desktop/pattern-circles.svg'
import zx9ImgDesktop from '../../assets/home/desktop/image-speaker-zx9.png'
import Button from '../../UI/Button'
import { Link } from 'react-router-dom'
export default function Trendy() {
	return (
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
	)
}
