import { useContext, useEffect, useRef } from 'react'
import iconOrder from '/assets/checkout/icon-order-confirmation.svg'
import { useNavigate } from 'react-router-dom'
import classes from './CheckoutDialog.module.scss'
import CheckoutDialogList from './CheckoutDialogList.jsx'
import Link from '../../UI/Link.jsx'
import CartContext from '../../store/cart-context.jsx'

export default function CheckoutDialog() {
	const dialogRef = useRef()
	const navigate = useNavigate()
	const { removeProducts } = useContext(CartContext)
	useEffect(() => {
		if (dialogRef.current) {
			dialogRef.current.showModal()
			const firstFocusableElement = dialogRef.current.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])')
			firstFocusableElement?.focus()
		}
		const handleBackdropClick = e => {
			if (dialogRef.current.open && e.target === dialogRef.current) {
				removeProducts()
				dialogRef.current.close()
				navigate('/')
			}
		}

		dialogRef.current.addEventListener('click', handleBackdropClick)

		return () => {
			if (dialogRef.current) {
				dialogRef.current.removeEventListener('click', handleBackdropClick)
			}
		}
	}, [navigate, removeProducts])
	return (
		<dialog
			ref={dialogRef}
			role='dialog'
			aria-labelledby='checkout-dialog-title'
			aria-describedby='checkout-dialog-description'
			onClose={() => {
				removeProducts()
				dialogRef.current.close()
				navigate('/')
			}}
			className={classes.checkout__dialog}
		>
			<div className={classes['checkout__dialog-wrapper']}>
				<img className={classes['checkout__dialog-img']} src={iconOrder} alt='Order confirmation icon.' />
				<h2 id='checkout-dialog-title' className={classes['checkout__dialog-h2']}>
					Thank you <br /> for your order
				</h2>
				<p id='checkout-dialog-description' className={classes['checkout__dialog-text']}>
					You will receive an email confirmation shortly.
				</p>
				<div className={classes['checkout__dialog-box']}>
					<CheckoutDialogList />
				</div>
				<Link to='/'>Back to home</Link>
			</div>
		</dialog>
	)
}
