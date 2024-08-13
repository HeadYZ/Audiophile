/* eslint-disable react/prop-types */
import Button from '../../UI/Button.jsx'
import classes from './ProductInfo.module.scss'
export default function ProductInfo({ name, price, images, isNew, category, description }) {
	const productTitle = name.split(' ').slice(0, -1).join(' ')
	const formatedPrice = new Intl.NumberFormat().format(price)
	return (
		<div className={classes.product__box}>
			<div className={classes.product__picture}>
				<picture>
					<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={images.tablet} />
					<source media='(min-width: 1440px)' srcSet={images.desktop} />
					<img src={images.mobile} alt={productTitle} />
				</picture>
			</div>
			<article className={classes.product__info}>
				{isNew && <span className={classes.product__overline}>New product</span>}
				<h1 className={`${classes.product__heading} ${!isNew && classes['product__heading--old']}`}>
					{productTitle}
					<br></br>
					{category}
				</h1>
				<p className={classes.product__description}>{description}</p>
				<span className={classes.product__price}>$ {formatedPrice}</span>
				<div className={classes['product__box-second']}>
					<input type='number' defaultValue='1' className={classes['product__box-second-input']} />
					<Button btn='1'>Add to cart</Button>
				</div>
			</article>
		</div>
	)
}
