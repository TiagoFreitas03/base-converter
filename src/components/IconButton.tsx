import { ButtonHTMLAttributes } from "react"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: 'equals' | 'x' | 'shuffle' | 'paste'
	color: 'blue' | 'yellow'
	type?: 'submit' | 'button'
}

export function IconButton({ icon, children, color, type = 'button', ...rest }: IconButtonProps) {
	return (
		<button
			type={type}
			className="px-3 py-2 rounded mt-2 text-white"
			style={{
				backgroundColor: color === 'blue' ? '#1e3a8a' : '#ca8a04'
			}}
			{...rest}
		>
			<i className={`mr-1 fa-solid fa-${icon}`} /> { children }
		</button>
	)
}
