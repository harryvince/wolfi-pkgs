import { writable } from "svelte/store";

export type Theme = "light" | "dark";

function getSystemTheme(): Theme {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export const theme = writable<Theme>("light");

export function initTheme() {
	// set to system default
	theme.set(getSystemTheme());

	// watch for changes
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	media.addEventListener("change", (e) => {
		theme.set(e.matches ? "dark" : "light");
	});
}
