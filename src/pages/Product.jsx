import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../util/http'
import Loader from '../UI/Loader.jsx'
import ProductDetails from '../components/Product/ProductDetails.jsx'
import Products from '../components/HomePage/Products.jsx'
import Info from '../components/HomePage/Info.jsx'
import Cart from '../components/Cart/Cart.jsx'

export default function Product() {
	const { productName } = useParams()

	const { data: product, isPending } = useQuery({
		queryKey: ['products', productName],
		queryFn: ({ signal }) => fetchProducts({ searchProduct: productName, signal }),
	})

	return (
		<>
			{isPending && <Loader />}
			{!isPending && <ProductDetails product={product} />}
			{!isPending && <Products product={product} />}
			{!isPending && <Info product={product} />}
			{!isPending && <Cart />}
		</>
	)
}
