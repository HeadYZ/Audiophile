import { useCallback, useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.scss'

export default function Cart() {
	const { products } = useContext(CartContext)
	const cartRef = useRef(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (cartRef.current) {
			cartRef.current.showModal()
		}
	}, [])

	const handleClose = useCallback(() => {
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
		<dialog
			ref={cartRef}
			className={classes.cart}
			onClose={handleClose}
			aria-labelledby='cart-title'
			aria-describedby='cart-description'
		>
			<div>
				<h1 id='cart-title'>Cart ({products.length})</h1>
				<button
					onClick={() => {
						/* Remove all items logic */
					}}
					aria-label='Remove all items from the cart'
				>
					Remove all
				</button>
			</div>
			<ul aria-describedby='cart-description'>
				{products.map((product, index) => (
					<li key={index}>
						<div>
							{/* <picture>
                <source media='(min-width: 768px) and (max-width: 1440px )' />
                <source media='(min-width: 1440px)' />
                <img src={product.imageUrl} alt={product.name} />
              </picture> */}
						</div>
						<div>
							<span>{product.name}</span>
							<span>{product.price}</span>
						</div>
						<div>
							<button
								onClick={() => {
									/* Decrease quantity logic */
								}}
								aria-label='Decrease quantity'
							>
								-
							</button>
							<input type='number' defaultValue='1' min='1' step='1' aria-label={`Quantity for ${product.name}`} />
							<button
								onClick={() => {
									/* Increase quantity logic */
								}}
								aria-label='Increase quantity'
							>
								+
							</button>
						</div>
					</li>
				))}
			</ul>
			<div>
				<span>Total</span>
				<span>{/* Total price logic */}</span>
			</div>
			<Link to='/checkout' aria-label='Proceed to checkout'>
				Checkout
			</Link>
		</dialog>
	)
}
