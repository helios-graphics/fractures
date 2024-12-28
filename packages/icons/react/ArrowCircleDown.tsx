import type { SVGProps } from "react"
const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<g fillRule="evenodd" clipRule="evenodd">
			<path d="M13 13.586 15.586 11A1 1 0 0 1 17 12.414l-5 5-5-5A1 1 0 1 1 8.414 11L11 13.586V7a1 1 0 1 1 2 0z" />
			<path d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0m2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" />
		</g>
	</svg>
)
export default SvgArrowCircleDown
