import classes from './CheckoutSummary.module.scss'

export default function CheckoutSummary() {
	return (
		<div className={classes.checkout__summary}>
            
			<button type='submit' className={classes.checkout__submit}>
				Confirm Order
			</button>
		</div>
	)
}
