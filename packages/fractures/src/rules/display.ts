import type { FractureRuleType } from "../types/meta"

export const DISPLAY: Array<FractureRuleType> = [
	{ selector: "block", declarations: { display: "block" } },
	{ selector: "contents", declarations: { display: "contents" } },
	{ selector: "flex", declarations: { display: "flex" } },
	{ selector: "flow-root", declarations: { display: "flow-root" } },
	{ selector: "grid", declarations: { display: "grid" } },
	{ selector: "inline", declarations: { display: "inline" } },
	{ selector: "inline-block", declarations: { display: "inline-block" } },
	{ selector: "inline-flex", declarations: { display: "inline-flex" } },
	{ selector: "inline-grid", declarations: { display: "inline-grid" } },
	{ selector: "inline-table", declarations: { display: "inline-table" } },
	{ selector: "list-item", declarations: { display: "list-item" } },
	{ selector: "none", declarations: { display: "none" } },
	{ selector: "run-in", declarations: { display: "run-in" } },
	{ selector: "table", declarations: { display: "table" } },
	{ selector: "table-caption", declarations: { display: "table-caption" } },
	{ selector: "table-cell", declarations: { display: "table-cell" } },
	{ selector: "table-column", declarations: { display: "table-column" } },
	{ selector: "table-column-group", declarations: { display: "table-column-group" }, },
	{ selector: "table-footer-group", declarations: { display: "table-footer-group" }, },
	{ selector: "table-header-group", declarations: { display: "table-header-group" }, },
	{ selector: "table-row", declarations: { display: "table-row" } },
	{ selector: "table-row-group", declarations: { display: "table-row-group" }, },
	{ selector: "table-layout-fixed", declarations: { tableLayout: "fixed" } },
	{ selector: "float-left", declarations: { float: "left" } },
	{ selector: "float-right", declarations: { float: "right" } },
] as const
