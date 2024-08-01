import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import RootLayout from './pages/RootLayout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

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
			{ path: '/:products', element: <ProductsPage /> },
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
