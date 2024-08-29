/* eslint-disable react/prop-types */
import { useRef } from 'react'
import classes from './CartProducts.module.scss'

export default function CartProducts({ products }) {
	const productQuantity = useRef()
	const validateInteger = () => {
		const input = productQuantity.current
		if (input) {
			const sanitizedValue = input.value.replace(/[^0-9]/g, '')
			input.value = sanitizedValue || '1'
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
				const formattedPrice = new Intl.NumberFormat().format(product.price)
				return (
					<li key={index} className={classes['cart__list-item']}>
						<div className={classes['cart__list-box-img']}>
							<img src={product.cartIcon} alt='' />
						</div>
						<div className={classes['cart__list-info']}>
							<span className={classes['cart__list-title']} title={product.title}>
								{product.title}
							</span>
							<span className={classes['cart__list-price']}>$ {formattedPrice}</span>
						</div>
						<div className={classes['cart__list-box']}>
							<button
								onClick={() => productQuantity.current.stepDown()}
								aria-label='Decrease quantity'
								className={`${classes['cart__list-btn']} ${classes['cart__list-btn--left']}`}
							>
								-
							</button>
							<input
								type='number'
								ref={productQuantity}
								onChange={validateInteger}
								onKeyDown={handleKeyPress}
								defaultValue={product.quantity}
								min='1'
								step='1'
								aria-label={`Quantity for ${product.name}`}
								className={classes['cart__list-input']}
							/>
							<button
								onClick={() => productQuantity.current.stepUp()}
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
