/* eslint-disable react/prop-types */
import ProductFeatures from './ProductFeatures.jsx'
import classes from './ProductDetails.module.scss'
import ProductInfo from './ProductInfo.jsx'
import ProductAdditionInfo from './ProductAdditionInfo.jsx'
import { useNavigate } from 'react-router-dom'
export default function ProductDetails({ product }) {
	const navigate = useNavigate()
	return (
		<section className={classes.product}>
			<div className={classes.product__wrapper}>
				<button onClick={() => navigate(-1)} className={classes.product__link}>
					Go Back
				</button>

				<ProductInfo
					name={product.name}
					price={product.price}
					images={product.image}
					isNew={product.new}
					category={product.category}
					description={product.description}
					cartIcon={product.cart}
				/>
				<ProductFeatures features={product.features} box={product.includes} />
				<ProductAdditionInfo products={product.others} images={product.gallery} />
			</div>
		</section>
	)
}
