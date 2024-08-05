import Button from '../../UI/Button'
import classes from './ProductItem.module.scss'
export default function ProductItem({ newProduct = false, title, description }) {
	return (
		<li className={classes.products__item}>
			<div>
				<picture></picture>
			</div>
			<div className={classes['products__item-box']}>
				{newProduct && <h5 className={classes['products__item-heading']}>New Product</h5>}
				<h2 className={classes['products__item-title']}>{title}</h2>
				<p className={classes['products__item-description']}>{description}</p>
				<Button btn='1'>See product</Button>
			</div>
		</li>
	)
}
