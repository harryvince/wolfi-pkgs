import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";
import { pkg } from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const _pkg = await db.query.pkg.findFirst({
		where: eq(pkg.name, slug.trim()),
	});

	return { pkg: _pkg };
};
