import ProductItem from './ProductItem.jsx'
import classes from './ProductsList.module.scss'
/* eslint-disable react/prop-types */
export default function ProductsList({ products, productTitle }) {
	return (
		<ul className={classes.products__list}>
			{products
				.filter(product => product.category === productTitle)
				.map(product => {
					return (
						<ProductItem
							key={product.name}
							title={product.name}
							description={product.description}
							newProduct={product.new}
						/>
					)
				})
				.reverse()}
		</ul>
	)
}

// {products.map(product => {
// 	if (product.category === productTitle) {
// 		return <ProductItem key={product.name} title={product.name} description={product.description} />
// 	}
// })}
