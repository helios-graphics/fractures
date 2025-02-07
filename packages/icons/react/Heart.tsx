import type { SVGProps } from "react"
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 8c.485-2.5 2.427-4 5.34-4 3.883 0 5.34 4 4.369 7-1.385 4.279-6.796 8-9.709 10-2.913-2-8.363-5.84-9.709-10-.97-3 .486-7 4.37-7C9.566 4 11.514 5.5 12 8"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgHeart
