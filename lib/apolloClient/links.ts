import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";

const apiUrl = "http://localhost:3000/api/graphql";

export const httpLink = createHttpLink({
	uri: apiUrl,
});

export const authLink = setContext(async (_, { headers }) => {
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
		},
	};
});

export const errorLink = onError(({ networkError }) => {
	if (networkError) {
		alert("Network error, unable to reach server");
	}
});
