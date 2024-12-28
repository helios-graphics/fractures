import type { SVGProps } from "react"
const SvgArrow4Way = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path d="M4 5.414V9a1 1 0 1 1-2 0V2h7a1 1 0 1 1 0 2H5.414L12 10.586 18.586 4H15a1 1 0 1 1 0-2h7v8a1 1 0 1 1-2 0V5.414L13.414 12 20 18.586V15a1 1 0 1 1 2 0v7h-7a1 1 0 1 1 0-2h3.586L12 13.414 5.414 20H9a1 1 0 1 1 0 2H2v-7a1 1 0 1 1 2 0v3.586L10.586 12z" />
	</svg>
)
export default SvgArrow4Way
