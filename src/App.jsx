import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import { lazy, Suspense } from 'react'
import Product from './pages/Product.jsx'
import ProductsLayout from './pages/ProductsLayot.jsx'
import { CartContextProvider } from './store/cart-context.jsx'
import Cart from './components/Cart/Cart.jsx'
const Earphones = lazy(() => import('./pages/Earphones.jsx'))
const Headphones = lazy(() => import('./pages/Headphones.jsx'))
const Speakers = lazy(() => import('./pages/Speakers.jsx'))
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				children: [{ path: '/cart', element: <Cart /> }],
			},

			{
				path: '/earphones',
				element: <ProductsLayout />,
				children: [
					{
						path: '/earphones',
						element: (
							<Suspense fallback={<p>Loading...</p>}>
								<Earphones />
							</Suspense>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
			{
				path: '/headphones',
				element: <ProductsLayout />,
				children: [
					{
						path: '/headphones',
						element: (
							<Suspense fallback={<p>Loading...</p>}>
								<Headphones />
							</Suspense>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
			{
				path: '/speakers',
				element: <ProductsLayout />,
				children: [
					{
						path: '/speakers',
						element: (
							<Suspense fallback={<p>Loading...</p>}>
								<Speakers />
							</Suspense>
						),
						children: [{ path: 'cart', element: <Cart /> }],
					},
					{ path: ':productName', element: <Product />, children: [{ path: 'cart', element: <Cart /> }] },
				],
			},
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
