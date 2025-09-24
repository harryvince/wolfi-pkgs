import { db } from "$lib/server/db";
import { eq, like } from "drizzle-orm";
import type { PageServerLoad } from "./$types";
import { pkg } from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const _pkg = await db.query.pkg.findFirst({
		where: eq(pkg.name, slug.trim()),
	});

	if (!_pkg) {
		const pkgs = await db.query.pkg.findMany({
			where: like(pkg.name, `%${slug.trim()}%`),
		});
		return { pkgs };
	}

	return { pkg: _pkg };
};
