import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../store/cart-context'

export default function Cart() {
	const cartCtx = useContext(CartContext)
	const cartRef = useRef()
	console.log(cartCtx.products.length)
	return (
		<dialog>
			<div>
				<span>Cart (3)</span>
				<span>Remove all</span>
			</div>
			<ul>
				<li>
					<div>
						{/* <picture>
							<source media='(min-width: 768px) and (max-width: 1440px )' />
							<source media='(min-width: 1440px)' />
							<img />
						</picture> */}
					</div>
					<div>
						<span></span>
						<span></span>
					</div>
					<div>
						<button onClick={() => cartRef.current.stepDown()}>-</button>
						<input type='number' ref={cartRef} defaultValue='1' min='1' step='1' />
						<button onClick={() => cartRef.current.stepUp()}>+</button>
					</div>
				</li>
			</ul>
			<div>
				<span>Total</span>
				<span></span>
			</div>
			<Link>Checkout</Link>
		</dialog>
	)
}
