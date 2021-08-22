import { nonNull, objectType } from "nexus";
import prisma from "../lib/prisma";

export const Query = objectType({
	name: "Query",
	definition(t) {
		t.list.field("items", {
			type: nonNull("Item"),
			resolve: (_parent, _args) => {
				return prisma.item.findMany({
					orderBy: {
						score: "desc",
					},
				});
			},
		});
	},
});