import classes from './ProductsHeader.module.scss'

// eslint-disable-next-line react/prop-types
export default function ProductsHeader({ title }) {
	return (
		<header className={classes.products__header}>
			<div className={classes['products__header-box']}>
				<h1 className={classes['products__header-title']}>{title}</h1>
			</div>
		</header>
	)
}
