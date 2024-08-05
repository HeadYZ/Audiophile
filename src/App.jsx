import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import RootLayout from './pages/RootLayout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import { lazy, Suspense } from 'react'
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
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<Earphones />
					</Suspense>
				),
			},
			{
				path: '/headphones',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<Headphones />
					</Suspense>
				),
			},
			{
				path: '/speakers',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<Speakers />
					</Suspense>
				),
			},
		],
	},
])
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
