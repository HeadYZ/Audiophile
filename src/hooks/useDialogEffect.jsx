import { useEffect } from 'react'

export const useDialogEffect = (cartRef, handleClose) => {
	useEffect(() => {
		const dialog = cartRef.current

		const handleKeyDown = event => {
			if (event.key === 'Escape' && dialog?.open) {
				handleClose()
			}
		}

		const handleDialogClose = () => {
			if (!dialog?.open) {
				handleClose()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		dialog?.addEventListener('close', handleDialogClose)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			dialog?.removeEventListener('close', handleDialogClose)
		}
	}, [handleClose, cartRef])
}
