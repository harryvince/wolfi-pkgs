import { readFileSync } from "fs";
import { db } from "../src/lib/server/db";
import { pkg, type Pkg } from "../src/lib/server/db/schema";

const data = readFileSync("/tmp/APKINDEX", "utf8");
const entries = data.trim().split(/\n\s*\n/);
console.log(`Entries to process: ${entries.length}`);
entries.forEach(async (entry) => {
	const lines = entry.trim().split("\n");
	const obj: { [key: string]: string | number } = {};

	for (const line of lines) {
		const [key, value] = line.split(":", 2);
		switch (key) {
			case "C":
				obj.checksum = value;
				break;
			case "P":
				obj.name = value;
				break;
			case "V":
				obj.version = value;
				break;
			case "A":
				obj.architecture = value;
				break;
			case "S":
				obj.compressedSize = Number(value);
				break;
			case "I":
				obj.installedSize = Number(value);
				break;
			case "T":
				obj.description = value;
				break;
			case "L":
				obj.license = value;
				break;
			case "o":
				obj.origin = value;
				break;
			case "t":
				obj.type = Number(value);
				break;
			case "c":
				obj.commit = value;
				break;
			case "D":
				obj.dependencies = value;
				break;
			case "p":
				obj.provides = value;
				break;
		}
	}

	await db.insert(pkg).values(obj as Pkg);
});
