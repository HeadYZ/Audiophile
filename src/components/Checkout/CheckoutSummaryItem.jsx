import { useContext } from 'react'
import classes from './CheckoutSummaryItem.module.scss'
import CartContext from '../../store/cart-context'
import { formattedPrice } from '../../util/numberFormatter'

export default function CheckoutSummaryItem() {
	const { products } = useContext(CartContext)
	console.log(products)
	return (
		<>
			{products.map((product, index) => {
				return (
					<li key={index} className={classes['checkout__list-item']}>
						<div className={classes['checkout__list-box-img']}>
							<img src={product.cartIcon} alt='' />
						</div>
						<div className={classes['checkout__list-info']}>
							<span className={classes['checkout__list-title']} title={product.title}>
								{product.title}
							</span>
							<span className={classes['checkout__list-price']}>$ {formattedPrice(product.price)}</span>
						</div>
					</li>
				)
			})}
		</>
	)
}
