/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { formattedPrice } from '../../util/numberFormatter.js'
import classes from './CartProducts.module.scss'

export default function CartProducts({ products, onRemove, onUpdate }) {
	const productQuantities = useRef({})

	const onUpdateHandler = (title, index) => {
		const input = productQuantities.current[index]
		if (input) {
			const sanitizedValue = input.value.replace(/[^0-9]/g, '')
			input.value = sanitizedValue
		}

		if (input && input.value !== '') {
			onUpdate({ title, quantity: input.value })
		}
	}

	const onBlurHandler = (title, index) => {
		const input = productQuantities.current[index]
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
			{products.map((product, index) => (
				<li key={index} className={classes['cart__list-item']}>
					<div className={classes['cart__list-box-img']}>
						<img src={product.cartIcon} alt={product.title} />
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
								productQuantities.current[index].stepDown()
							}}
							aria-label={`Decrease quantity for ${product.title}`}
							className={`${classes['cart__list-btn']} ${classes['cart__list-btn--left']}`}
						>
							-
						</button>
						<input
							type='number'
							ref={el => (productQuantities.current[index] = el)}
							onChange={() => onUpdateHandler(product.title, index)}
							onKeyDown={handleKeyPress}
							onBlur={() => onBlurHandler(product.title, index)}
							defaultValue={product.quantity}
							min='1'
							step='1'
							aria-label={`Quantity for ${product.title}`}
							className={classes['cart__list-input']}
						/>
						<button
							onClick={() => {
								onUpdate({ title: product.title })
								productQuantities.current[index].stepUp()
							}}
							aria-label={`Increase quantity for ${product.title}`}
							className={`${classes['cart__list-btn']} ${classes['cart__list-btn--right']}`}
						>
							+
						</button>
					</div>
				</li>
			))}
		</>
	)
}
