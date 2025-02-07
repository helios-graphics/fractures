import type { SVGProps } from "react"
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 3a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h6a1 1 0 1 1 0 2h-6a1 1 0 0 0-1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 0-.997-1H4a1 1 0 1 1 0-2h6a1 1 0 0 0 1-.997V4a1 1 0 0 1 1-1"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgPlus
