import CartContex from '../../store/cart-context.jsx'
import { useContext, useState } from 'react'
import { formattedPrice } from '../../util/numberFormatter'
import classes from './CheckoutDialogList.module.scss'

export default function CheckoutDialogList() {
	const { products, totalPrice } = useContext(CartContex)
	const [show, setShow] = useState(false)

	const showItemHandler = () => {
		setShow(prevShow => !prevShow)
	}

	return (
		<ul className={classes.checkout__list}>
			{products.map(product => (
				<li
					key={product.title}
					className={`${classes['checkout__list-item']} ${!show && classes['checkout__list-item--hide']}`}
				>
					<img src={product.cartIcon} alt='' className={classes['checkout__list-item-img']} />
					<div>
						<h3 className={classes['checkout__list-item-title']}>{product.title}</h3>
						<span className={classes['checkout__list-item-price']}>$ {formattedPrice(product.price)}</span>
					</div>
					<p className={classes['checkout__list-item-quantity']}>x{product.quantity}</p>
				</li>
			))}
			{products.length > 1 && (
				<li className={`${classes['checkout__list-item-other']} ${classes['checkout__list-item-other--hide']}`}>
					and {products.length - 1} other item(s)
				</li>
			)}
			{products.length > 1 && (
				<li className={`${classes['checkout__list-item-other']} ${classes['checkout__list-item-other--btn']}`}>
					<button onClick={showItemHandler}>{show ? 'View less' : `and ${products.length - 1} other item(s)`}</button>
				</li>
			)}
			<li className={classes['checkout__list-item-grand']}>
				<span className={classes['checkout__list-item-grand-title']}>Grand total</span>
				<span className={classes['checkout__list-item-grand-total']}>$ {formattedPrice(totalPrice)}</span>
			</li>
		</ul>
	)
}
