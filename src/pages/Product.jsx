import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../util/http'

export default function Product() {
	const { productName } = useParams()

	const { data: product, isPending } = useQuery({
		queryKey: ['products', productName],
		queryFn: ({ signal }) => fetchProducts({ searchProduct: productName, signal }),
	})
	console.log(product)
	return (
		<>
			<div></div>
		</>
	)
}
