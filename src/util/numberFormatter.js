export function formattedPrice(price) {
	return new Intl.NumberFormat().format(price)
}
