/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import classes from './ProductItem.module.scss'

export default function ProductItem({ newProduct = false, title, description, images, category, isEven }) {
	const product = title.split(' ').slice(0, -1).join(' ')
	const productLink = product.replace(/\s/g, '')
	return (
		<li className={classes.products__item}>
			<div className={`${classes['products__item-picture']} ${!isEven && classes['products__item-picture--second']}`}>
				<picture>
					<source media='(min-width: 768px) and (max-width: 992px )' srcSet={images.tablet} />
					<source media='(min-width: 1440px)' srcSet={images.desktop} />
					<img
						src={images.mobile}
						alt='Man wearing earphones listening to music'
						className={classes['info__picture-img']}
					/>
				</picture>
			</div>
			<div className={classes['products__item-box']}>
				{newProduct && <h5 className={classes['products__item-heading']}>New Product</h5>}
				<h2 className={classes['products__item-title']}>
					{product}
					<br></br>
					{category}
				</h2>
				<p className={classes['products__item-description']}>{description}</p>
				<Button btn='1'>
					<Link to={productLink}>See product</Link>
				</Button>
			</div>
		</li>
	)
}
