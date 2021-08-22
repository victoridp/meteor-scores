import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { makeSchema } from "nexus";
import path from "path";
import * as types from "../../schema";

let apolloServerHandler: ReturnType<typeof ApolloServer.prototype.createHandler>;
export const config = {
	api: {
		bodyParser: false,
	},
};

const getApolloServerHandler = async () => {
	if (!apolloServerHandler) {
		const schema = makeSchema({
			types,
			outputs: {
				typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
				schema: path.join(process.cwd(), "generated/schema.graphql"),
			},
		});

		const server = new ApolloServer({
			schema,
			introspection: true,
		})
		await server.start()
		apolloServerHandler = server.createHandler({
			path: "/api/graphql",
		});
	}
	return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const apolloServerHandler = await getApolloServerHandler();
	return apolloServerHandler(req, res);
};
