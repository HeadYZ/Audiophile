import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { CartContextProvider } from './store/cart-context.jsx'
import './App.css'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import Cart from './components/Cart/Cart.jsx'
import ScrollToTop from './components/ScrollToTop.js'
import Product from './pages/Product.jsx'
import ProductsLayout from './pages/ProductsLayot.jsx'
import Checkout from './pages/Checkout.jsx'
import { action as checkoutAction } from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'

const Earphones = lazy(() => import('./pages/Earphones.jsx'))
const Headphones = lazy(() => import('./pages/Headphones.jsx'))
const Speakers = lazy(() => import('./pages/Speakers.jsx'))

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<ScrollToTop />
				<RootLayout />
			</>
		),
		children: [
			{
				path: '/',
				element: (
					<>
						<ScrollToTop />
						<HomePage />
					</>
				),
				children: [{ path: '/cart', element: <Cart /> }],
			},
			{
				path: '/checkout',
				element: (
					<>
						<ScrollToTop />
						<Checkout />
					</>
				),
				children: [{ path: 'cart', element: <Cart /> }],
				action: checkoutAction,
			},
			{
				path: '/earphones',
				element: (
					<>
						<ScrollToTop />
						<ProductsLayout />
					</>
				),
				children: [
					{
						path: '/earphones',
						element: (
							<>
								<ScrollToTop />
								<Suspense fallback={<p>Loading...</p>}>
									<Earphones />
								</Suspense>
							</>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
			{
				path: '/headphones',
				element: (
					<>
						<ScrollToTop />
						<ProductsLayout />
					</>
				),
				children: [
					{
						path: '/headphones',
						element: (
							<>
								<ScrollToTop />
								<Suspense fallback={<p>Loading...</p>}>
									<Headphones />
								</Suspense>
							</>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
			{
				path: '/speakers',
				element: (
					<>
						<ScrollToTop />
						<ProductsLayout />
					</>
				),
				children: [
					{
						path: '/speakers',
						element: (
							<>
								<ScrollToTop />
								<Suspense fallback={<p>Loading...</p>}>
									<Speakers />
								</Suspense>
							</>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
			{ path: '*', element: <NotFound /> },
		],
	},
])

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<CartContextProvider>
				<RouterProvider router={router} />
			</CartContextProvider>
		</QueryClientProvider>
	)
}

export default App
