import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.scss'
import CartProducts from './CartProducts'
import Link from '../../UI/Link'
import { formattedPrice } from '../../util/numberFormatter'

export default function Cart() {
	const { products, removeProduct, totalPrice, updateProduct, removeProducts } = useContext(CartContext)
	const cartRef = useRef(null)
	const backdropRef = useRef(null)
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)

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

	function showAlert() {
		products.length === 0 && alert('There are no products in your cart. Add the product before checkout.')
	}

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
						onClick={removeProducts}
						aria-label='Remove all items from the cart'
					>
						Remove all
					</button>
				</div>
				{products.length > 0 && (
					<ul className={classes.cart__list} aria-describedby='cart-description'>
						<CartProducts products={products} onRemove={removeProduct} onUpdate={updateProduct} />
					</ul>
				)}
				{products.length === 0 && <p className={classes.cart__info}>Your cart is empty.</p>}

				<div className={classes['cart__list-box-price']}>
					<span>Total</span>
					<span className={classes['cart__list-price']}>$ {formattedPrice(totalPrice)}</span>
				</div>
				<Link to={products.length > 0 ? '/checkout' : '#'} onClick={showAlert} aria-label='Proceed to checkout'>
					Checkout
				</Link>
			</dialog>
		</>
	)
}
