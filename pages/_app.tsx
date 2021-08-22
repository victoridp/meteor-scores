import "../styles/_main.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Provider>
	);
}

export default MyApp;
