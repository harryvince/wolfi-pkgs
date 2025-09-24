import type { InferSelectModel } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const pkg = sqliteTable("pkg", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	checksum: text().unique().notNull(),
	name: text().notNull(),
	version: text().notNull(),
	architecture: text().notNull(),
	compressedSize: integer().notNull(),
	installedSize: integer().notNull(),
	description: text().notNull(),
	license: text(),
	origin: text().notNull(),
	type: integer().notNull(),
	commit: text(),
	dependencies: text(),
	provides: text(),
});

export type Pkg = InferSelectModel<typeof pkg>;
