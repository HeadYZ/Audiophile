/* eslint-disable react/prop-types */
import classes from './Input.module.scss'
export default function Input({ label, name, style, ...props }) {
	return (
		<div className={classes.input__box}>
			<label className={classes.input__label} style={style} htmlFor={name}>
				{label}
			</label>
			<input className={classes.input} {...props} />
		</div>
	)
}
