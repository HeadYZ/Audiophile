import { Form, useActionData } from 'react-router-dom'
import Input from '../../UI/Input'
import { useEffect, useState, useRef } from 'react'
import checkoutCashIcon from '/assets/checkout/icon-cash-on-delivery.svg'
import classes from './CheckoutForm.module.scss'

export default function CheckoutForm() {
	const actionData = useActionData()
	const [paymentMethod, setPaymentMethod] = useState('emoney')
	const [inputErrors, setInputErrors] = useState([])

	const inputRefs = useRef({})

	const handlePaymentChange = e => {
		setPaymentMethod(e.target.value)
	}

	useEffect(() => {
		if (actionData && actionData.emptyFields) {
			setInputErrors(actionData.emptyFields)
			focusFirstEmptyField(actionData.emptyFields)
		}
	}, [actionData])

	const focusFirstEmptyField = emptyFields => {
		for (const field of emptyFields) {
			if (inputRefs.current[field]) {
				inputRefs.current[field].focus()
				break
			}
		}
	}

	const hasError = fieldName => inputErrors.includes(fieldName)

	return (
		<Form method='post' id='checkout_form'>
			<h2 className={classes.checkout__h2}>Billing details</h2>
			<div className={`${classes.checkout__box} ${classes['checkout__box--first']}`}>
				<Input
					label='Name'
					id='name'
					type='text'
					placeholder='Alexei Ward'
					name='name'
					error={hasError('name')}
					ref={el => (inputRefs.current.name = el)} // Dynamiczna referencja
				/>
				<Input
					label='Email Address'
					id='email'
					type='email'
					placeholder='alexeiward@gmail.com'
					name='email'
					error={hasError('email')}
					ref={el => (inputRefs.current.email = el)}
				/>
				<Input
					label='Number'
					type='number'
					id='phoneNumber'
					placeholder='+1202-555-0136'
					name='phoneNumber'
					error={hasError('phoneNumber')}
					ref={el => (inputRefs.current.phoneNumber = el)}
				/>
			</div>

			<h2 className={`${classes.checkout__h2} ${classes['checkout__h2--second']}`}>Shipping info</h2>
			<div className={`${classes.checkout__box} ${classes['checkout__box--second']}`}>
				<Input
					label='Your address'
					id='address'
					type='text'
					placeholder='1137 Williams Avenue'
					name='address'
					error={hasError('address')}
					ref={el => (inputRefs.current.address = el)}
				/>
				<Input
					label='ZIP Code'
					id='zipCode'
					type='number'
					placeholder='10001'
					name='zipCode'
					error={hasError('zipCode')}
					ref={el => (inputRefs.current.zipCode = el)}
				/>
				<Input
					label='City'
					id='city'
					type='text'
					placeholder='New York'
					name='city'
					error={hasError('city')}
					ref={el => (inputRefs.current.city = el)}
				/>
				<Input
					label='Country'
					id='country'
					type='text'
					placeholder='United States'
					name='country'
					error={hasError('country')}
					ref={el => (inputRefs.current.country = el)}
				/>
			</div>

			<h2 className={`${classes.checkout__h2} ${classes['checkout__h2--third']}`}>Payment details</h2>
			<div>
				<fieldset className={classes.checkout__fieldset}>
					<p className={classes['checkout__fieldset-legend']}>Payment Method</p>

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
							defaultChecked={paymentMethod === 'emoney'}
							className={classes['checkout__fieldset-input-radio']}
						/>
						e-Money
					</label>

					<label
						htmlFor='payment-cash'
						className={`${classes['checkout__fieldset-input']} ${classes['checkout__fieldset-input--second']} ${
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

				<div className={classes['checkout__box-emoney']}>
					{paymentMethod === 'emoney' && (
						<Input
							label='e-Money Number'
							id='emoneyNumber'
							name='emoneyNumber'
							placeholder='2382521993'
							type='number'
							error={hasError('emoneyNumber')}
							ref={el => (inputRefs.current.emoneyNumber = el)}
						/>
					)}
					{paymentMethod === 'emoney' && (
						<Input
							label='e-Money PIN'
							id='emoneyPin'
							name='emoneyPin'
							placeholder='6891'
							type='number'
							error={hasError('emoneyPin')}
							ref={el => (inputRefs.current.emoneyPin = el)}
						/>
					)}
					{paymentMethod === 'cash' && (
						<div className={classes['checkout__cash-box']}>
							<img src={checkoutCashIcon} alt='' />
							<p className={classes['checkout__cash-info']}>
								The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
								residence. Just make sure your address is correct so that your order will not be cancelled.
							</p>
						</div>
					)}
				</div>
			</div>
		</Form>
	)
}
