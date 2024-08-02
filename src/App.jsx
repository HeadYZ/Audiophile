import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import RootLayout from './pages/RootLayout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import Earphones from './pages/Earphones.jsx'
import Headphones from './pages/Headphones.jsx'
import Speakers from './pages/Speakers.jsx'

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
			{ path: '/earphones', element: <Earphones /> },
			{ path: '/headphones', element: <Headphones /> },
			{ path: '/speakers', element: <Speakers /> },
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
