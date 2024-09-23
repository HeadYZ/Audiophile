import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import classes from './Checkout.module.scss'
import { useEffect } from 'react'
import CheckoutSummary from '../components/Checkout/CheckoutSummary'
import CheckoutForm from '../components/Checkout/CheckoutForm'
export default function Checkout() {
	const navigate = useNavigate()

	useEffect(() => {
		document.getElementById('root').style.backgroundColor = 'rgb(241, 241, 241)'
		return () => {
			document.getElementById('root').style.backgroundColor = '#fff'
		}
	}, [])

	return (
		<>
			<Navigation />
			<main className={classes.checkout}>
				<button
					className={classes['checkout__return-btn']}
					onClick={() => {
						navigate(-1)
					}}
				>
					Go back
				</button>
				<div className={classes.checkout__wrapper}>
					<section className={classes.checkout__form}>
						<h1 className={classes.checkout__h1}>Checkout</h1>
						<CheckoutForm />
					</section>
					<CheckoutSummary />
				</div>
			</main>
		</>
	)
}
export async function action({ request }) {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	return null
}
