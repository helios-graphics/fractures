import type { FractureRuleType } from "../types/meta"

export const FLEX: Array<FractureRuleType> = [
	{ selector: "flex-wrap", declarations: { flexWrap: "wrap" } },

	{ selector: "flex-row", declarations: { flexDirection: "row" } },
	{ selector: "flex-column", declarations: { flexDirection: "column" } },

	{ selector: "space-around", declarations: { justifyContent: "space-around" }, },
	{ selector: "space-between", declarations: { justifyContent: "space-between" }, },
	{ selector: "space-evenly", declarations: { justifyContent: "space-evenly" }, },
	{ selector: "flex-x-center", declarations: { justifyContent: "center" } },
	{ selector: "justify-flex-start", declarations: { justifyContent: "flex-start" } },
	{ selector: "justify-flex-end", declarations: { justifyContent: "flex-end" } },
	{ selector: "flex-center", declarations: { alignItems: "center", justifyContent: "center" }, },

	{ selector: "align-baseline", declarations: { alignItems: "baseline" } },
	{ selector: "align-flex-start", declarations: { alignItems: "flex-start" } },
	{ selector: "align-flex-end", declarations: { alignItems: "flex-end" } },
	{ selector: "align-stretch", declarations: { alignItems: "stretch" } },
	{ selector: "align-start", declarations: { alignItems: "start" } },
	{ selector: "align-end", declarations: { alignItems: "end" } },
	{ selector: "flex-y-center", declarations: { alignItems: "center" } },

	{ selector: "self-center", declarations: { alignSelf: "center", justifySelf: "center" }, },
	{ selector: "self-justify-center", declarations: { justifySelf: "center" } },
	{ selector: "self-justify-start", declarations: { justifySelf: "flex-start" } },
	{ selector: "self-justify-end", declarations: { justifySelf: "flex-end" } },
	{ selector: "self-justify-baseline", declarations: { justifySelf: "baseline" } },
	{ selector: "self-align-center", declarations: { alignSelf: "center" } },
	{ selector: "self-align-start", declarations: { alignSelf: "flex-start" } },
	{ selector: "self-align-end", declarations: { alignSelf: "flex-end" } },

	{ selector: "gap-px", declarations: { gap: "var(--box-px)" } },
	{ selector: "gap-1", declarations: { gap: "var(--box-1)" } },
	{ selector: "gap-2", declarations: { gap: "var(--box-2)" } },
	{ selector: "gap-3", declarations: { gap: "var(--box-3)" } },
	{ selector: "gap-4", declarations: { gap: "var(--box-4)" } },
	{ selector: "gap-5", declarations: { gap: "var(--box-5)" } },
	{ selector: "gap-6", declarations: { gap: "var(--box-6)" } },
	{ selector: "gap-7", declarations: { gap: "var(--box-7)" } },
	{ selector: "gap-8", declarations: { gap: "var(--box-8)" } },
	{ selector: "gap-9", declarations: { gap: "var(--box-9)" } },
	{ selector: "gap-10", declarations: { gap: "var(--box-10)" } },
	{ selector: "gap-11", declarations: { gap: "var(--box-11)" } },
	{ selector: "gap-12", declarations: { gap: "var(--box-12)" } },
	{ selector: "gap-13", declarations: { gap: "var(--box-13)" } },
	{ selector: "gap-14", declarations: { gap: "var(--box-14)" } },
	{ selector: "gap-15", declarations: { gap: "var(--box-15)" } },
	{ selector: "gap-16", declarations: { gap: "var(--box-16)" } },
	{ selector: "gap-24", declarations: { gap: "var(--box-24)" } },
	{ selector: "gap-32", declarations: { gap: "var(--box-32)" } },
	{ selector: "gap-40", declarations: { gap: "var(--box-40)" } },
	{ selector: "gap-48", declarations: { gap: "var(--box-48)" } },
] as const
