import ProductItem from './ProductItem.jsx'
import classes from './ProductsList.module.scss'
/* eslint-disable react/prop-types */
export default function ProductsList({ products, productTitle }) {
	return (
		<ul className={classes.products__list}>
			{products
				.filter(product => product.category === productTitle)
				.reverse()
				.map((product, index) => {
					const isEven = index % 2
					return (
						<ProductItem
							key={product.name}
							title={product.name}
							description={product.description}
							newProduct={product.new}
							images={product.categoryImage}
							category={product.category}
							isEven={isEven === 0}
						/>
					)
				})}
		</ul>
	)
}

