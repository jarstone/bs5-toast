interface Param {
	body?: string
	animation?: boolean
	autohide?: boolean
	btnClose?: boolean
	btnCloseWhite?: boolean
	className?: string
	delay?: number
	gap?: number
	header?: string
	margin?: string
	placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}
declare const bs5: {
	Toast: {
		new (param: Param): {
			element: HTMLDivElement
			bootstrapToast: {
				show(): void
				hide(): void
			}

			show(): void
			hide(): void
		}
	}
}
export default bs5
