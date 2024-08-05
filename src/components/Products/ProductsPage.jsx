import Info from '../../components/HomePage/Info.jsx'
import Products from '../../components/HomePage/Products.jsx'
import classes from './ProductsPage.module.scss'
import { fetchProducts } from '../../util/http.js'
import { useQuery } from '@tanstack/react-query'
import ProductsHeader from './ProductsHeader.jsx'
import ProductsList from './ProductsList.jsx'

// eslint-disable-next-line react/prop-types
export default function ProductsPage({ productsTitle }) {
	const { data, isPending } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })
	console.log(data)
	return (
		<>
			<ProductsHeader title={productsTitle} />

			<main>
				<section className={classes.products}>
					<div className={classes.products__wrapper}>
						{isPending && 'Loading...'}
						{!isPending && <ProductsList products={data} productTitle={productsTitle} />}
					</div>
				</section>
				<Products />
				<Info />
			</main>
		</>
	)
}
