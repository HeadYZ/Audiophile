/* eslint-disable react/prop-types */
import classes from './CheckoutSummaryItem.module.scss'
import { formattedPrice } from '../../util/numberFormatter'

export default function CheckoutSummaryItem({ products }) {
	return (
		<>
			{products.map((product, index) => {
				return (
					<li key={index} className={classes['checkout__list-item']}>
						<div className={classes['checkout__list-box-img']}>
							<img src={product.cartIcon} alt='' />
						</div>
						<div className={classes['checkout__list-box']}>
							<span className={classes['checkout__list-title']} title={product.title}>
								{product.title}
							</span>
							<span className={classes['checkout__list-price']}>$ {formattedPrice(product.price)}</span>
						</div>
						<p className={classes['checkout__list-quantity']}>x{product.quantity}</p>
					</li>
				)
			})}
		</>
	)
}
