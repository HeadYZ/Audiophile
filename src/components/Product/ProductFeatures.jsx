/* eslint-disable react/prop-types */
import classes from './ProductFeatures.module.scss'

export default function ProductFeatures({ features, box }) {
	return (
		<article className={classes.product__features}>
			<h3 className={`${classes['product__features-heading']} ${classes['product__features-heading--first']}`}>
				Features
			</h3>
			<p className={classes['product__features-text']}>{features}</p>
			<div className={classes['product__features-box']}>
				<h3 className={classes['product__features-heading']}>In the box</h3>
				<ul className={classes['product__features-list']}>
					{box.map(product => (
						<li key={product.item} className={classes['product__features-list-item']}>
							<span className={classes['product__features-list-quantity']}>{product.quantity}x</span>
							<span className={classes['product__features-list-text']}>{product.item}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}
