export async function fetchProducts() {
	const response = await fetch('https://audiophile-d7632-default-rtdb.firebaseio.com/products.json')

	const data = await response.json()
	return data
}
