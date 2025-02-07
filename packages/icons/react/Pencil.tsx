import type { SVGProps } from "react"
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M18.97 2.707a1 1 0 0 0-1.414 0l-1.414 1.414 4.243 4.243 1.414-1.414a1 1 0 0 0 0-1.414zM8.658 20.092a1 1 0 0 1-.707.293H5.12a1 1 0 0 1-1-1v-2.829a1 1 0 0 1 .293-.707L14.728 5.536l4.243 4.242z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgPencil
