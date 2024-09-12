import { Form, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import classes from './Checkout.module.scss'
import Input from '../UI/Input'
import { useState } from 'react'
export default function Checkout() {
	const navigate = useNavigate()
	const [paymentMethod, setPaymentMethod] = useState('')
	const handlePaymentChange = e => {
		setPaymentMethod(e.target.value)
	}

	return (
		<>
			<Navigation />
			<main className={classes.checkout}>
				<button
					onClick={() => {
						navigate(-1)
					}}
				>
					Go back
				</button>
				<section className={classes.checkout__wrapper}>
					<h1 className={classes.checkout__h1}>Checkout</h1>
					<Form>
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
							<fieldset>
								<legend>Payment method</legend>

								<label htmlFor='payment-emoney'>
									<input
										type='radio'
										name='paymentMethod'
										value='emoney'
										id='payment-cash'
										onChange={handlePaymentChange}
									/>
									e-Money
								</label>

								<label htmlFor='payment-cash'>
									<input
										type='radio'
										name='paymentMethod'
										value='cash'
										id='payment-cash'
										onChange={handlePaymentChange}
									/>
									Cash on Delivery
								</label>
							</fieldset>
							
							{paymentMethod === 'emoney' && (
								<Input
									label='e-money Number'
									id='emoneyNumber'
									name='emoneyNumber'
									placeholder='2382521993'
									type='number'
								/>
							)}
							{paymentMethod === 'emoney' && (
								<Input label='e-money Pin' id='emoneyPin' name='emoneyPin' placeholder='6891' type='number' />
							)}
						</div>
					</Form>
				</section>
			</main>
		</>
	)
}
