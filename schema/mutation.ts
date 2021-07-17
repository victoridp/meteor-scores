import {
	nonNull,
	objectType
} from "nexus";
import prisma from "../lib/prisma";

export const Mutation = objectType({
	name: "Mutation",
	definition(t) {
		t.field("createItem", {
			type: "Item",
			args: {
				input: nonNull("CreateItemInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.create({
					data: {
						...args.input,
					},
				});
			},
		});
		t.field("voteItem", {
			type: "Item",
			args: {
				input: nonNull("VoteItemInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.update({
					data: {
						score: {
							increment: 1,
						},
					},
					where: {
						id: args.input.itemId,
					},
				});
			},
		});
		t.field("unvoteItem", {
			type: "Item",
			args: {
				input: nonNull("VoteItemInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.update({
					data: {
						score: {
							decrement: 1,
						},
					},
					where: {
						id: args.input.itemId,
					},
				});
			},
		});
	},
});
