import type { SVGProps } from "react"
const SvgPaperEmpty = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 17V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
			clipRule="evenodd"
		/>
		<path d="M8 9a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2z" />
	</svg>
)
export default SvgPaperEmpty
