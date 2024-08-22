import { Link, useNavigate } from 'react-router-dom'
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import ArrowRightIcon from '../../assets/shared/desktop/ArrowRight.svg'
import classes from './Products.module.scss'

export default function Products() {
	const navigate = useNavigate()
	return (
		<section className={classes.products}>
			<ul className={classes.products__list}>
				<li className={classes['products__list-item']} onClick={() => navigate('/headphones')}>
					<div className={classes['products__list-item-top']}>
						<img
							src={headphonesImg}
							alt=''
							className={`${classes['products__list-img']} ${classes['products__list-img--1']}`}
						/>
					</div>

					<div className={classes['products__list-box']}>
						<h3 className={classes['products__list-item-heading']}>Headphones</h3>
						<Link to='/headphones' className={classes['products__list-item-link']}>
							<span>Shop</span>
							<img src={ArrowRightIcon} alt='' />
						</Link>
					</div>
				</li>
				<li className={classes['products__list-item']} onClick={() => navigate('/speakers')}>
					<div className={classes['products__list-item-top']}>
						<img
							src={speakersImg}
							alt=''
							className={`${classes['products__list-img']} ${classes['products__list-img--2']}`}
						/>
					</div>

					<div className={classes['products__list-box']}>
						<h3 className={classes['products__list-item-heading']}>Speakers</h3>
						<Link to='/speakers' className={classes['products__list-item-link']}>
							<span>Shop</span>
							<img src={ArrowRightIcon} alt='' />
						</Link>
					</div>
				</li>
				<li className={classes['products__list-item']} onClick={() => navigate('/earphones')}>
					<div className={classes['products__list-item-top']}>
						<img
							src={earphonesImg}
							alt=''
							className={`${classes['products__list-img']} ${classes['products__list-img--3']}`}
						/>
					</div>
					<div className={classes['products__list-box']}>
						<h3 className={classes['products__list-item-heading']}>Earphones</h3>
						<Link to='/earphones' className={classes['products__list-item-link']}>
							<span>Shop</span>
							<img src={ArrowRightIcon} alt='' />
						</Link>
					</div>
				</li>
			</ul>
		</section>
	)
}
