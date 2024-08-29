import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.scss'
import CartProducts from './CartProducts'

export default function Cart() {
	const { products } = useContext(CartContext)
	const cartRef = useRef(null)
	const backdropRef = useRef(null)
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	console.log(products)
	useEffect(() => {
		if (cartRef.current) {
			cartRef.current.show()
			setIsOpen(true)
			document.body.style.overflow = 'hidden'
		}
	}, [])

	const handleClose = useCallback(() => {
		if (cartRef.current) {
			cartRef.current.close()
			document.body.style.overflow = 'visible'
		}
		setIsOpen(false)
		navigate('..')
	}, [navigate])

	useEffect(() => {
		const dialog = cartRef.current

		const handleDialogClose = () => {
			if (dialog && !dialog.open) {
				handleClose()
			}
		}

		document.addEventListener('close', handleDialogClose)

		return () => {
			document.removeEventListener('close', handleDialogClose)
		}
	}, [handleClose])

	return (
		<>
			{isOpen && <div ref={backdropRef} className={classes.cart__backdrop} onClick={handleClose} />}
			<dialog
				ref={cartRef}
				className={classes.cart}
				onClose={handleClose}
				aria-labelledby='cart-title'
				aria-describedby='cart-description'
			>
				<div className={classes.cart__box}>
					<h3 id='cart-title' className={classes.cart__heading}>
						Cart ({products.length})
					</h3>
					<button
						className={classes['cart__remove-btn']}
						onClick={() => {
							/* Remove all items logic */
						}}
						aria-label='Remove all items from the cart'
					>
						Remove all
					</button>
				</div>
				<ul className={classes.cart__list} aria-describedby='cart-description'>
					<CartProducts products={products} />
				</ul>
				<div>
					<span>Total</span>
					<span>{/* Total price logic */}</span>
				</div>
				<Link to='/checkout' aria-label='Proceed to checkout'>
					Checkout
				</Link>
			</dialog>
		</>
	)
}
