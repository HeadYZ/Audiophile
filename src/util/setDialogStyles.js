function getScrollbarWidth() {
	return window.innerWidth - document.documentElement.clientWidth
}

export default function setDialogStyles(isVisible) {
	const scrollbarWidth = getScrollbarWidth()
	document.body.style.overflow = isVisible ? 'hidden' : 'visible'
	document.body.style.paddingRight = isVisible ? `${scrollbarWidth}px` : '0px'
}
