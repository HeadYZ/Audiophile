/* eslint-disable react/prop-types */
import classes from './ProductFeatures.module.scss'

export default function ProductFeatures({ features, box }) {
	return (
		<article className={classes.product__features}>
			<h2 className={classes['product__features-heading']}>Features</h2>
			<p className={classes['product__features-text']}>{features}</p>
			<div className={classes['product__features-box']}>
				<h2 className={classes['product__features-box-heading']}>In the box</h2>
				<ul className={classes['product__features-list']}>
					{box.map(product => (
						<li key={product.item} className={classes['product__features-list-item']}>
							<span className={classes['product__features-list-quantity']}>{product.quantity}</span>
							{product.item}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}
