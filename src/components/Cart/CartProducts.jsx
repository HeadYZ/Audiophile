/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { formattedPrice } from '../../util/numberFormatter.js'
import classes from './CartProducts.module.scss'

export default function CartProducts({ products, onRemove, onUpdate }) {
	const productQuantity = useRef()
	const onUpdateHandler = title => {
		const input = productQuantity.current
		if (input) {
			const sanitizedValue = input.value.replace(/[^0-9]/g, '')

			input.value = sanitizedValue
		}

		if (input && input.value !== '') {
			onUpdate({ title, quantity: input.value })
		}
	}
	const onBlurHandler = title => {
		const input = productQuantity.current
		if (input && input.value === '') {
			input.value = '1'
			onUpdate({ title, quantity: input.value })
		}
	}

	const handleKeyPress = event => {
		const invalidChars = ['e', 'E', '.', '-']
		if (invalidChars.includes(event.key)) {
			event.preventDefault()
		}
	}

	return (
		<>
			{products.map((product, index) => {
				return (
					<li key={index} className={classes['cart__list-item']}>
						<div className={classes['cart__list-box-img']}>
							<img src={product.cartIcon} alt='' />
						</div>
						<div className={classes['cart__list-info']}>
							<span className={classes['cart__list-title']} title={product.title}>
								{product.title}
							</span>
							<span className={classes['cart__list-price']}>$ {formattedPrice(product.price)}</span>
						</div>
						<div className={classes['cart__list-box']}>
							<button
								onClick={() => {
									onRemove({ title: product.title })
									productQuantity.current.stepDown()
								}}
								aria-label='Decrease quantity'
								className={`${classes['cart__list-btn']} ${classes['cart__list-btn--left']}`}
							>
								-
							</button>
							<input
								type='number'
								ref={productQuantity}
								onChange={() => {
									onUpdateHandler(product.title)
								}}
								onKeyDown={handleKeyPress}
								onBlur={() => {
									onBlurHandler(product.title)
								}}
								defaultValue={product.quantity}
								min='1'
								step='1'
								aria-label={`Quantity for ${product.name}`}
								className={classes['cart__list-input']}
							/>
							<button
								onClick={() => {
									onUpdate({ title: product.title })
									productQuantity.current.stepUp()
								}}
								aria-label='Increase quantity'
								className={`${classes['cart__list-btn']} ${classes['cart__list-btn--right']}`}
							>
								+
							</button>
						</div>
					</li>
				)
			})}
		</>
	)
}
