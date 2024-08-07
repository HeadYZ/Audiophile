import { Link } from 'react-router-dom'
import earphonesImg from '../../assets/home/shared/desktop/image-category-thumbnail-earphones.png'
import speakersImg from '../../assets/home/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesImg from '../../assets/home/shared/desktop/image-category-thumbnail-headphones.png'
import ArrowRightIcon from '../../assets/home/shared/desktop/ArrowRight.svg'

import classes from './Products.module.scss'

export default function Products() {
	return (
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
				<li className={classes['products__list-item']}>
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
	)
}
