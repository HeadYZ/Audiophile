import CartContex from '../../store/cart-context.jsx'
import { useContext } from 'react'
import { formattedPrice } from '../../util/numberFormatter'
import classes from './CheckoutDialogList.module.scss'

export default function CheckoutDialogList() {
	const { products, totalPrice } = useContext(CartContex)
	console.log(products)
	return (
		<ul className={classes.checkout__list}>
			{products.map(product => (
				<li key={product.title} className={classes['checkout__list-item']}>
					<img src={product.cartIcon} alt='' className={classes['checkout__list-item-img']} />
					<div>
						<h3 className={classes['checkout__list-item-title']}>{product.title}</h3>
						<span className={classes['checkout__list-item-price']}>$ {formattedPrice(product.price)}</span>
					</div>
					<p className={classes['checkout__list-item-quantity']}>x{product.quantity}</p>
				</li>
			))}
			{products.length > 0 && (
				<li className={classes['checkout__list-item-other']}>and {products.length - 1} other item(s)</li>
			)}
			<li className={classes['checkout__list-item-grand']}>
				<span className={classes['checkout__list-item-grand-title']}>Grand total</span>
				<span className={classes['checkout__list-item-grand-total']}>$ {formattedPrice(totalPrice)}</span>
			</li>
		</ul>
	)
}
