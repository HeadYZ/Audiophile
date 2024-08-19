/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import classes from './ProductAdditionInfo.module.scss'

export default function ProductAdditionInfo({ products, images }) {
	const gallery = [...Object.values(images)]
	const lastImage = gallery.splice(-1, 1)

	return (
		<>
			<div className={classes.product__images}>
				<div className={classes['product__images-box--first']}>
					{gallery.map((image, id) => (
						<picture key={id * Math.random() + 'image'}>
							<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={image.tablet} />
							<source media='(min-width: 1440px)' srcSet={image.desktop} />
							<img src={image.mobile} className={classes['product__images-picture']} />
						</picture>
					))}
				</div>
				<div>
					<picture>
						<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={lastImage[0].tablet} />
						<source media='(min-width: 1440px)' srcSet={lastImage[0].desktop} />
						<img src={lastImage[0].mobile} className={classes['product__images-picture']} />
					</picture>
				</div>
			</div>
			<div>
				<h3 className={classes['product__addition-heading']}>You may also like</h3>
				<ul className={classes['product__addition-list']}>
					{products.map(product => {
						let productName = product.slug.split('-')
						console.log(product.name)

						const productCategory = productName.splice(-1, 1)
						productName = productName.join('')

						return (
							<li key={product.slug} className={classes['product__addition-list-item']}>
								<div className={classes['product__addition-picture']}>
									<picture>
										<source media='(min-width: 768px) and (max-width: 1440px )' srcSet={product.image.tablet} />
										<source media='(min-width: 1440px)' srcSet={product.image.desktop} />
										<img src={product.image.mobile} alt={product.name} className={classes['product__addition-img']} />
									</picture>
								</div>
								<div className={classes['product__addition-box']}>
									<h4 className={classes['product__addition-box-heading']}>{product.name}</h4>
									<Button btn='1'>
										<Link to={`/${productCategory}/${productName}`}>See product</Link>
									</Button>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
