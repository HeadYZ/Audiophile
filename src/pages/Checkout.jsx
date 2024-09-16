import { Form, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import classes from './Checkout.module.scss'
import Input from '../UI/Input'
import { useEffect, useState } from 'react'
import CheckoutSummary from '../components/Checkout/CheckoutSummary'
export default function Checkout() {
	const navigate = useNavigate()
	const [paymentMethod, setPaymentMethod] = useState('')
	const handlePaymentChange = e => {
		setPaymentMethod(e.target.value)
	}

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
				<section className={classes.checkout__wrapper}>
					<h1 className={classes.checkout__h1}>Checkout</h1>
					<Form method='post'>
						<h2 className={classes.checkout__h2}>Billing details</h2>
						<div className={classes.checkout__box}>
							<Input label='Name' id='name' type='text' placeholder='Alexei Ward' name='name' />
							<Input label='Email Address' id='email' type='email' placeholder='alexeiward@gmail.com' name='email' />
							<Input label='Number' type='number' id='phoneNumber' placeholder='+1202-555-0136' name='phoneNumber' />
						</div>
						<h2 className={classes.checkout__h2}>Shipping info</h2>
						<div className={classes.checkout__box}>
							<Input label='Your address' id='address' type='text' placeholder='1137 Williams Avenue' name='address' />
							<Input label='ZIP Code' id='zipCode' type='number' placeholder='10001' name='zipCode' />
							<Input label='City' id='city' type='text' placeholder='New York' name='city' />
							<Input label='Country' id='country' type='text' placeholder='United States' name='country' />
						</div>
						<h2 className={classes.checkout__h2}>Payment details</h2>
						<div>
							<fieldset className={classes.checkout__fieldset}>
								<legend className={classes['checkout__fieldset-legend']}>Payment Method</legend>

								<label
									htmlFor='payment-emoney'
									className={`${classes['checkout__fieldset-input']} ${
										paymentMethod === 'emoney' && classes['checkout__fieldset-input--checked']
									}`}
								>
									<input
										type='radio'
										name='paymentMethod'
										value='emoney'
										id='payment-emoney'
										onChange={handlePaymentChange}
										className={classes['checkout__fieldset-input-radio']}
									/>
									e-Money
								</label>

								<label
									htmlFor='payment-cash'
									className={`${classes['checkout__fieldset-input']} ${
										paymentMethod === 'cash' && classes['checkout__fieldset-input--checked']
									}`}
								>
									<input
										type='radio'
										name='paymentMethod'
										value='cash'
										id='payment-cash'
										onChange={handlePaymentChange}
										className={classes['checkout__fieldset-input-radio']}
									/>
									Cash on Delivery
								</label>
							</fieldset>

							{paymentMethod === 'emoney' && (
								<Input
									label='e-Money Number'
									id='emoneyNumber'
									name='emoneyNumber'
									placeholder='2382521993'
									type='number'
									style={{ marginTop: '3.2rem' }}
								/>
							)}
							{paymentMethod === 'emoney' && (
								<Input
									label='e-Money PIN'
									id='emoneyPin'
									name='emoneyPin'
									placeholder='6891'
									type='number'
									style={{ marginTop: '2.4rem' }}
								/>
							)}
						</div>
						<CheckoutSummary />
					</Form>
				</section>
			</main>
		</>
	)
}
export async function action({ request }) {
	const formData = await request.formData()

	const data = Object.fromEntries(formData)
	console.log(data)
	return null
}
