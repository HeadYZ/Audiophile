/* eslint-disable react/no-unescaped-entities */
import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router-dom'
import { fetchProducts } from '../util/http'
import Loader from '../UI/Loader.jsx'
import ProductDetails from '../components/Product/ProductDetails.jsx'
import Products from '../components/HomePage/Products.jsx'
import Info from '../components/HomePage/Info.jsx'
import classes from './Product.module.scss'
import Link from '../UI/Link.jsx'
export default function Product() {
	const { productName } = useParams()

	const { data: product, isPending } = useQuery({
		queryKey: ['products', productName],
		queryFn: ({ signal }) => fetchProducts({ searchProduct: productName, signal }),
	})
	console.log(product === undefined)
	return (
		<>
			<Outlet />
			{isPending && <Loader />}
			{!isPending && !product && (
				<main className={classes.error}>
					<h1 className={classes.error__h1}>Unfortunately, we can't find the page you're looking for.</h1>
					<Link to={'/'} style={{ width: '100%', 'max-width': '30rem' }}>
						Return to the homepage
					</Link>
				</main>
			)}
			{!isPending && product && <ProductDetails product={product} />}
			{!isPending && product && <Products product={product} />}
			{!isPending && product && <Info product={product} />}
		</>
	)
}
