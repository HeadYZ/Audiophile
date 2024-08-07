export async function fetchProducts({ searchProduct = false, signal }) {
	const response = await fetch('https://audiophile-d7632-default-rtdb.firebaseio.com/products.json', { signal })
	const data = await response.json()
	if (searchProduct) {
		return data.find(product => {
			let checkedProduct = product.name.split(' ').slice(0, -1).join(' ').replace(/\s/g, '')
			if (checkedProduct === searchProduct) return true
		})
	}
	return data
}
