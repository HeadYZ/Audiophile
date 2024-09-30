import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './CheckoutSummary.module.scss'
import CheckoutSummaryItem from './CheckoutSummaryItem'
import { formattedPrice } from '../../util/numberFormatter'
export default function CheckoutSummary() {
	const { products, totalPrice } = useContext(CartContext)
	const shipping = 50
	const vat = 0.23
	return (
		<section className={classes.checkout__summary}>
			<h2 className={classes['checkout__summary-h2']}>Summary</h2>
			<ul>
				<CheckoutSummaryItem products={products} />
			</ul>
			<div className={classes['checkout__summary-box']}>
				<p className={classes['checkout__summary-total']}>
					<span>Total</span> {formattedPrice(totalPrice)}$
				</p>
				<p className={classes['checkout__summary-shipping']}>
					<span>Shipping</span> 50$
				</p>
				<p className={classes['checkout__summary-vat']}>
					<span>Vat (included)</span>
					{formattedPrice(totalPrice * vat)}
				</p>
				<p className={classes['checkout__summary-grand-total']}>
					<span>Grand total</span>
					{formattedPrice(totalPrice + shipping)}$
				</p>
			</div>
			<button type='submit' className={classes['checkout__summary-submit']} form='checkout_form'>
				Continue & pay
			</button>
		</section>
	)
}
