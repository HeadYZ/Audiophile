/* eslint-disable react/prop-types */
import ProductFeatures from './ProductFeatures.jsx'
import classes from './ProductDetails.module.scss'
import ProductInfo from './ProductInfo.jsx'
import { Link } from 'react-router-dom'
export default function ProductDetails({ product }) {
	return (
		<section className={classes.product}>
			<div className={classes.product__wrapper}>
				<Link to='../' className={classes.product__link}>
					Go Back
				</Link>

				<ProductInfo
					name={product.name}
					price={product.price}
					images={product.image}
					isNew={product.new}
					category={product.category}
					description={product.description}
				/>
				<ProductFeatures features={product.features} box={product.includes} />
			</div>
		</section>
	)
}
