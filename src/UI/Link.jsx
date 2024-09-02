import { Link as RouterLink } from 'react-router-dom'
import classes from './Link.module.scss'

// eslint-disable-next-line react/prop-types
export default function Link({ children, style, ...props }) {
	return (
		<RouterLink className={`${classes.link}`} style={style} {...props}>
			{children}
		</RouterLink>
	)
}
