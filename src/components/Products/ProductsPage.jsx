import Info from '../../components/HomePage/Info.jsx'
import Products from '../../components/HomePage/Products.jsx'
import classes from './ProductsPage.module.scss'
import { fetchProducts } from '../../util/http.js'
import { useQuery } from '@tanstack/react-query'
import ProductsList from './ProductsList.jsx'
import Loader from '../../UI/Loader.jsx'

// eslint-disable-next-line react/prop-types
export default function ProductsPage({ productsTitle }) {
	const { data, isPending } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

	return (
		<>
			<section className={classes.products}>
				<div className={classes.products__wrapper}>
					{isPending && <Loader />}
					{!isPending && <ProductsList products={data} productTitle={productsTitle} images={data.categoryImage} />}
				</div>
			</section>
			<Products />
			<Info />
		</>
	)
}
