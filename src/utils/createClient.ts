import { APIClient } from "../keelClient";

export const createClient = () => {
	if (!import.meta.env.VITE_APP_KEEL_API_URL) {
		throw new Error(
			"VITE_APP_KEEL_API_URL environment variable not set."
		);
	}

	const client = new APIClient({
		baseUrl: import.meta.env.VITE_APP_KEEL_API_URL,
	});

	return client;
}
