/* eslint-disable react/prop-types */
import classes from './Button.module.scss'

export default function Button({ btn, children, ...props }) {
	return (
		<>
			{btn === '3' && (
				<button className={classes.btn__3} {...props}>
					{children}
				</button>
			)}
			{btn < '3' && (
				<button className={btn === '1' ? classes.btn__1 : classes.btn__2} {...props}>
					{children}
				</button>
			)}
		</>
	)
}
