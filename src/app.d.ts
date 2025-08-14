// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		about: {
			webApplication: {
				buildHash: string;
				buildDate: string;
			};
		};
	}
	const __BUILD_CONST_BUILD_VERSION__: string;
	const __BUILD_CONST_BUILD_HASH__: string;
	const __BUILD_CONST_BUILD_DATE__: string;
	const __BUILD_CONST_ENVIRONMENT__: string;
}

export { };
