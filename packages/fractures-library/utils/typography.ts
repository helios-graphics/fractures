import type { FUITypographyUtility } from "@fractures/library/types/typography"

const getFontWeight = (fw: FUITypographyUtility['fontWeight']): string => {
  switch (fw) {
    case 'thin': return 'fw-thin';
    case 'extra-light': return 'fw-extra-light';
    case 'light': return 'fw-light';
    case 'normal': return 'fw-normal';
    case 'medium': return 'fw-medium';
    case 'semibold': return 'fw-semi-bold';
    case 'bold': return 'fw-bold';
    case 'extra-bold': return 'fw-extra-bold';
    case 'black': return 'fw-black';

    default: return '';
  }
}

export const getTypographyUtility = (props: FUITypographyUtility, className?: string): string => {
  const typoClasses: Array<string> = []

  const fontFamily = props.fontFamily ? props.fontFamily : "sans"
  const fontWeight = getFontWeight(props.fontWeight)

  typoClasses.push(fontFamily)
  typoClasses.push(fontWeight)

  if (props.className) typoClasses.push(props.className)
  if (props.fontStyle) typoClasses.push(props.fontStyle)
  if (props.isEllipsis) typoClasses.push("ellipsis")
  if (props.isUnselectable) typoClasses.push("unselectable")
  if (props.textAlign) typoClasses.push(props.textAlign)
  if (props.textDecoration) typoClasses.push(props.textDecoration)
  if (props.whiteSpace) typoClasses.push(props.whiteSpace)
  if (props.wordWrap) typoClasses.push(props.wordWrap)

  return typoClasses.join(" ")
}
