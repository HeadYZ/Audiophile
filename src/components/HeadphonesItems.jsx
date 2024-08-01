import Button from '../UI/Button'

export default function HeadphonesItems({ newProduct = false, title, description }) {
	return (
		<article>
			<div>
				<picture></picture>
			</div>
			<div>
				{newProduct && <h5>New Product</h5>}
				<h2>{title}</h2>
				<p>{description}</p>
				<Button btn='1'>See product</Button>
			</div>
		</article>
	)
}
