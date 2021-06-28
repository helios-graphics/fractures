import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const flex: Array<FractureRuleType> = [
  { selector: 'flex-wrap', declarations: {flexWrap: 'wrap'} },
  { selector: 'flex-column', declarations: {flexDirection: 'column'}, hasBreakpoints: true },
  { selector: 'space-around', declarations: {justifyContent: 'space-around'} },
  { selector: 'space-between', declarations: {justifyContent: 'space-between'} },
  { selector: 'space-evenly', declarations: {justifyContent: 'space-evenly'} },

  { selector: 'flex-center', declarations: {alignItems: 'center', justifyContent: 'center'} },
  { selector: 'flex-y-center', declarations: {alignItems: 'center'} },
  { selector: 'flex-x-center', declarations: {justifyContent: 'center'} },
  { selector: 'flex-left', declarations: {justifyContent: 'flex-start'} },
  { selector: 'flex-right', declarations: {justifyContent: 'flex-end'} },
  { selector: 'flex-baseline', declarations: {alignItems: 'baseline'} },
  { selector: 'flex-top', declarations: {alignItems: 'flex-start'} },
  { selector: 'flex-bottom', declarations: {alignItems: 'flex-end'} },

  { selector: 'self-center', declarations: {alignSelf: 'center', justifySelf: 'center'} },
  { selector: 'self-x-center', declarations: {justifySelf: 'center'} },
  { selector: 'self-y-center', declarations: {alignSelf: 'center'} },
  { selector: 'self-left', declarations: {justifySelf: 'flex-start'} },
  { selector: 'self-right', declarations: {justifySelf: 'flex-end'} },
  { selector: 'self-baseline', declarations: {justifySelf: 'baseline'} },
  { selector: 'self-top', declarations: {alignSelf: 'flex-start'} },
  { selector: 'self-bottom', declarations: {alignSelf: 'flex-end'} },

  { selector: 'flex-gap-px:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-px)'}, hasBreakpoints: true },
  { selector: 'flex-gap-1:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-1)'}, hasBreakpoints: true },
  { selector: 'flex-gap-2:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-2)'}, hasBreakpoints: true },
  { selector: 'flex-gap-3:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-3)'}, hasBreakpoints: true },
  { selector: 'flex-gap-4:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-4)'}, hasBreakpoints: true },
  { selector: 'flex-gap-5:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-5)'}, hasBreakpoints: true },
  { selector: 'flex-gap-6:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-6)'}, hasBreakpoints: true },
  { selector: 'flex-gap-7:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-7)'}, hasBreakpoints: true },
  { selector: 'flex-gap-8:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-8)'}, hasBreakpoints: true },
  { selector: 'flex-gap-9:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-9)'}, hasBreakpoints: true },
  { selector: 'flex-gap-10:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-10)'}, hasBreakpoints: true },
  { selector: 'flex-gap-11:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-11)'}, hasBreakpoints: true },
  { selector: 'flex-gap-12:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-12)'}, hasBreakpoints: true },
  { selector: 'flex-gap-13:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-13)'}, hasBreakpoints: true },
  { selector: 'flex-gap-14:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-14)'}, hasBreakpoints: true },
  { selector: 'flex-gap-15:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-15)'}, hasBreakpoints: true },
  { selector: 'flex-gap-16:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-16)'}, hasBreakpoints: true },
  { selector: 'flex-gap-24:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-24)'}, hasBreakpoints: true },
  { selector: 'flex-gap-32:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-32)'}, hasBreakpoints: true },
  { selector: 'flex-gap-40:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-40)'}, hasBreakpoints: true },
  { selector: 'flex-gap-48:not(.flex-column) > *:not(:last-child)', declarations: {marginRight: 'var(--box-48)'}, hasBreakpoints: true },

  { selector: 'flex-column.flex-gap-px > *:not(:last-child)', declarations: {marginBottom: 'var(--box-px)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-1 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-1)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-2 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-2)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-3 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-3)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-4 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-4)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-5 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-5)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-6 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-6)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-7 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-7)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-8 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-8)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-9 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-9)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-10 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-10)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-11 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-11)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-12 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-12)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-13 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-13)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-14 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-14)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-15 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-15)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-16 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-16)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-24 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-24)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-32 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-32)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-40 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-40)'}, hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-48 > *:not(:last-child)', declarations: {marginBottom: 'var(--box-48)'}, hasBreakpoints: true },

  // TODO Minify should consider merging these
  { selector: 'grow-1', declarations: {flexBasis: 0, flexGrow: 1} },
  { selector: 'grow-2', declarations: {flexBasis: 0, flexGrow: 2} },
  { selector: 'grow-3', declarations: {flexBasis: 0, flexGrow: 3} },
  { selector: 'grow-4', declarations: {flexBasis: 0, flexGrow: 4} },
  { selector: 'grow-5', declarations: {flexBasis: 0, flexGrow: 5} },
  { selector: 'grow-6', declarations: {flexBasis: 0, flexGrow: 6} },
  { selector: 'grow-7', declarations: {flexBasis: 0, flexGrow: 7} },
  { selector: 'grow-8', declarations: {flexBasis: 0, flexGrow: 8} },
  { selector: 'grow-9', declarations: {flexBasis: 0, flexGrow: 9} },
  { selector: 'grow-10', declarations: {flexBasis: 0, flexGrow: 10} },
  { selector: 'grow-11', declarations: {flexBasis: 0, flexGrow: 11} },
  { selector: 'grow-12', declarations: {flexBasis: 0, flexGrow: 12} },
];
