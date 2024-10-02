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
		if (dialogRef) {
			dialogRef.current.showModal()
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
			onClose={() => {
				removeProducts()
				dialogRef.current.close()
				navigate('/')
			}}
			className={classes.checkout__dialog}
		>
			<div className={classes['checkout__dialog-wrapper']}>
				<img
					className={classes['checkout__dialog-img']}
					src={iconOrder}
					alt='An icon representing the successful submission of the form.'
				/>
				<h2 className={classes['checkout__dialog-h2']}>
					Thank you <br></br> for your order
				</h2>
				<p className={classes['checkout__dialog-text']}>You will receive an email confirmation shortly.</p>
				<div className={classes['checkout__dialog-box']}>
					<CheckoutDialogList />
				</div>
				<Link to='/'>Back to home</Link>
			</div>
		</dialog>
	)
}
