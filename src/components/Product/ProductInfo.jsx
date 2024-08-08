/* eslint-disable react/prop-types */
import Button from '../../UI/Button.jsx'
import classes from './ProductInfo.module.scss'
export default function ProductInfo({ product }) {
	console.log(product)
	const productTitle = product.name.split(' ').slice(0, -1).join(' ')
	const formatedPrice = new Intl.NumberFormat().format(product.price)
	return (
		<section>
			<div className={classes.product__picture}>
				<picture>
					<source media='(min-width: 768px) and (max-width: 992px )' srcSet={product.image.tablet} />
					<source media='(min-width: 1440px)' srcSet={product.image.desktop} />
					<img src={product.image.mobile} alt={productTitle} />
				</picture>
			</div>
			<article>
				<span></span>
				<h1>
					{productTitle}
					<br></br>
					{product.category}
				</h1>
				<p>{product.description}</p>
				<span>$ {formatedPrice}</span>
				<div>
					<input type='number' />
					<Button btn='1'>Add to cart</Button>
				</div>
			</article>
		</section>
	)
}
