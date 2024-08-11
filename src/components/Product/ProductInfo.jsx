/* eslint-disable react/prop-types */
import Button from '../../UI/Button.jsx'
import classes from './ProductInfo.module.scss'
export default function ProductInfo({ product }) {
	const productTitle = product.name.split(' ').slice(0, -1).join(' ')
	const formatedPrice = new Intl.NumberFormat().format(product.price)
	return (
		<section className={classes.product}>
			<button className={classes.product__btn}>Go Back</button>
			<div className={classes.product__picture}>
				<picture>
					<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={product.image.tablet} />
					<source media='(min-width: 1440px)' srcSet={product.image.desktop} />
					<img src={product.image.mobile} alt={productTitle} />
				</picture>
			</div>
			<article className={classes.product__info}>
				{product.new && <span className={classes.product__overline}>New product</span>}
				<h1 className={`${classes.product__heading} ${!product.new && classes['product__heading--old']}`}>
					{productTitle}
					<br></br>
					{product.category}
				</h1>
				<p className={classes.product__description}>{product.description}</p>
				<span className={classes.product__price}>$ {formatedPrice}</span>
				<div className={classes.product__box}>
					<input type='number' defaultValue='1' className={classes['product__box-input']} />
					<Button btn='1'>Add to cart</Button>
				</div>
			</article>
		</section>
	)
}
