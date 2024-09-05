import { Form } from 'react-router-dom'

export default function Checkout() {
	return (
		<section>
			<button>Go back</button>
			<h1>Checkout</h1>
			<Form>
				<h2>Billing details</h2>
				<div>
					<div>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='name' placeholder='Alexei Ward' />
					</div>
				</div>
			</Form>
		</section>
	)
}
