/* eslint-disable react/prop-types */
import { useEffect, useState, forwardRef } from 'react'
import classes from './Input.module.scss'

const Input = forwardRef(({ label, name, style, type, error, ...props }, ref) => {
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		if (error) {
			setErrorMessage('The field cannot be empty.')
		} else {
			setErrorMessage('')
		}
	}, [error])

	const onBlurHandler = e => {
		if (e.target.value === '') {
			setErrorMessage('The field cannot be empty.')
			return
		}

		if (e.target.type === 'email') {
			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			if (!emailPattern.test(e.target.value)) {
				setErrorMessage('Wrong format.')
			} else {
				setErrorMessage('')
			}
			return
		}

		if (e.target.name === 'phoneNumber') {
			const phonePattern = /^\+?[0-9]{1,4}?[-. \\/]?(\(?\d{1,3}?\)?)?[-. \\/]?\d{1,4}[-. \\/]?\d{1,4}[-. \\/]?\d{1,9}$/
			if (!phonePattern.test(e.target.value) || e.target.value.length < 9) {
				setErrorMessage('Wrong format.')
			} else {
				setErrorMessage('')
			}
			return
		}

		if (e.target.name === 'zipCode') {
			const zipPattern = /^(\d{5}(-\d{4})?)|(\d{2}-\d{3})$/
			if (!zipPattern.test(e.target.value)) {
				setErrorMessage('Wrong format.')
			} else {
				setErrorMessage('')
			}
			return
		}

		if (e.target.name === 'emoneyPin') {
			if (e.target.value.length < 4) {
				setErrorMessage('Please enter at least 4 digits.')
			} else {
				setErrorMessage('')
			}
			return
		}

		if (e.target.name === 'emoneyNumber') {
			if (e.target.value.length < 10) {
				setErrorMessage('Please enter at least 10 digits.')
			} else {
				setErrorMessage('')
			}
			return
		}

		setErrorMessage('')
	}

	const handleKeyPress = event => {
		const invalidChars = ['e', 'E', '.', '-']
		if (invalidChars.includes(event.key)) {
			event.preventDefault()
		}
	}

	return (
		<div className={classes.input__box}>
			{errorMessage && <span className={classes['input__error-message']}>{errorMessage}</span>}
			<label
				className={`${classes.input__label} ${errorMessage && classes['input__label-error']}`}
				style={style}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				ref={ref}
				className={`${classes.input} ${errorMessage && classes.input__error}`}
				name={name}
				type={type}
				onKeyDown={e => {
					if (type === 'number') handleKeyPress(e)
				}}
				onBlur={onBlurHandler}
				{...props}
			/>
		</div>
	)
})

Input.displayName = 'Input'

export default Input
