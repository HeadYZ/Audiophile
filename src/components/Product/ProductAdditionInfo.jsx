/* eslint-disable react/prop-types */
import Button from '../../UI/Button'
import classes from './ProductAdditionInfo.module.scss'

export default function ProductAdditionInfo({ products, images }) {
	const gallery = [...Object.values(images)]
	const lastImage = gallery.splice(-1, 1)
	console.log(lastImage)
	return (
		<>
			<div className={classes.product__images}>
				<div className={classes['product__images-box']}>
					{gallery.map((image, id) => (
						<picture key={id * Math.random() + 'image'}>
							<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={image.tablet} />
							<source media='(min-width: 1440px)' srcSet={image.desktop} />
							<img src={image.mobile} />
						</picture>
					))}
				</div>
				<div className={classes['product__images-box']}>
					<picture>
						<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={lastImage[0].tablet} />
						<source media='(min-width: 1440px)' srcSet={lastImage[0].desktop} />
						<img src={lastImage[0].mobile} />
					</picture>
				</div>
			</div>
			<div>
				<h3>You may also like</h3>
				<ul>
					{products.map(product => (
						<li key={product.slug}>
							<div>
								<picture>
									<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={product.image.tablet} />
									<source media='(min-width: 1440px)' srcSet={product.image.desktop} />
									<img src={product.image.mobile} alt={product.name} />
								</picture>
							</div>
							<h4>{product.name}</h4>
							<Button btn='1'>See product</Button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
