import type { SVGProps } from "react"
const SvgPaste = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M10 4v-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V4h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM6 19V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1M9 6v.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgPaste
