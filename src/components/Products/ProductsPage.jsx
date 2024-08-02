import { useParams } from 'react-router-dom'
import Info from '../../components/HomePage/Info.jsx'
import Products from '../../components/HomePage/Products.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import classes from './ProductsPage.module.scss'
import { fetchProducts } from '../../util/http.js'
import { useQuery } from '@tanstack/react-query'
import HeadphonesItems from '../../components/HeadphonesItems.jsx'

export default function ProductsPage() {
	const { products: product } = useParams()
	const { data, isPending } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

	return (
		<>
			<header className={classes.products__header}>
				<Navigation />
				<div className={classes['products__header-box']}>
					<h1 className={classes['products__header-title']}>{product}</h1>
				</div>
			</header>
			<main>
				<section className={classes.headphones}>
					<div className={classes.headphones__wrapper}>
						{isPending && 'Loading...'}
						{!isPending &&
							data.map(products => {
								if (products.category === product) {
									console.log(products)
									return (
										<HeadphonesItems key={products.name} title={products.name} description={products.description} />
									)
								}
							})}
					</div>
				</section>
				<Products />
				<Info />
			</main>
		</>
	)
}
