/* eslint-disable react/prop-types */
import { useContext, useRef } from 'react'
import Button from '../../UI/Button.jsx'
import classes from './ProductInfo.module.scss'
import CartContext from '../../store/cart-context.jsx'

export default function ProductInfo({ name, price, images, isNew, category, description, cartIcon }) {
	const productTitle = name.split(' ').slice(0, -1).join(' ')
	const formattedPrice = new Intl.NumberFormat().format(price)
	const productQuantity = useRef()
	const { addProduct } = useContext(CartContext)
	const addProductHandler = () => {
		addProduct({ title: productTitle, quantity: productQuantity.current.value, price, cartIcon })
	}

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
		<div className={classes.product__box}>
			<div className={classes.product__picture}>
				<picture>
					<source media='(min-width: 768px) and (max-width: 1440px)' srcSet={images.tablet} />
					<source media='(min-width: 1440px)' srcSet={images.desktop} />
					<img src={images.mobile} alt={productTitle} />
				</picture>
			</div>
			<article className={classes.product__info}>
				{isNew && <span className={classes.product__overline}>New product</span>}
				<h1 className={`${classes.product__heading} ${!isNew && classes['product__heading--old']}`}>
					{productTitle}
					<br />
					{category}
				</h1>
				<p className={classes.product__description}>{description}</p>
				<span className={classes.product__price}>$ {formattedPrice}</span>
				<div className={classes['product__box-second']}>
					<div className={classes['product__box-second-tools']}>
						<button
							aria-label='Decrease quantity'
							onClick={() => productQuantity.current.stepDown()}
							className={classes['product__box-second-decrement']}
						>
							-
						</button>
						<input
							type='number'
							ref={productQuantity}
							onChange={validateInteger}
							onKeyDown={handleKeyPress}
							defaultValue='1'
							min='1'
							step='1'
							className={classes['product__box-second-input']}
						/>
						<button
							aria-label='Increase quantity'
							onClick={() => productQuantity.current.stepUp()}
							className={classes['product__box-second-increment']}
						>
							+
						</button>
					</div>
					<Button btn='1' onClick={addProductHandler}>
						Add to cart
					</Button>
				</div>
			</article>
		</div>
	)
}
