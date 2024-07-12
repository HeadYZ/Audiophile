import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [{ path: '/', element: <HomePage />, children: [{ path: '/cart', element: <Cart /> }] }],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
