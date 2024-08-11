import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../util/http'
import Loader from '../UI/Loader.jsx'
import ProductInfo from '../components/Product/ProductInfo.jsx'

export default function Product() {
	const { productName } = useParams()

	const { data: product, isPending } = useQuery({
		queryKey: ['products', productName],
		queryFn: ({ signal }) => fetchProducts({ searchProduct: productName, signal }),
	})

	return (
		<>
			{isPending && <Loader />}
			{!isPending && <ProductInfo product={product} />}
		</>
	)
}
