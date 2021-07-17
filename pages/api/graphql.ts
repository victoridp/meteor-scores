import { ApolloServer } from "apollo-server-micro";
import {
	makeSchema,
} from "nexus";
import path from "path";
import * as types from "../../schema";

export const schema = makeSchema({
	types,
	outputs: {
		typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
		schema: path.join(process.cwd(), "generated/schema.graphql"),
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const apolloServer = new ApolloServer({
	schema,
	introspection: true,
	playground: true
});

export default apolloServer.createHandler({
	path: "/api/graphql",
});
