import classes from './CheckoutSummary.module.scss'
import CheckoutSummaryItem from './CheckoutSummaryItem'

export default function CheckoutSummary() {
	return (
		<div className={classes.checkout__summary}>
			<h2 className={classes['checkout__summary-h2']}>Summary</h2>
			<ul>
				<CheckoutSummaryItem />
			</ul>
			<button type='submit' className={classes.checkout__submit}>
				Continue & pay
			</button>
		</div>
	)
}
