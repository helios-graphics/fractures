import type { SVGProps } from "react"
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path d="M4 4h16v16H4z" />
	</svg>
)
export default SvgSquare
