import classes from './Info.module.scss'
import manMobileImg from '/assets/shared/mobile/image-best-gear.jpg'
import manTabletImg from '/assets/shared/tablet/image-best-gear.jpg'
import manDesktopImg from '/assets/shared/desktop/image-best-gear.jpg'

export default function Info() {
	return (
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
						Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
						speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
						to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
						people who make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</div>
		</section>
	)
}
