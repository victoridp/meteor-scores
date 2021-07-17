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
		t.field("deleteItem", {
			type: "Item",
			args: {
				input: nonNull("ItemWhereUniqueInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.delete({
					where: {
						id: args.input.id
					},
				});
			},
		});
		t.field("voteItem", {
			type: "Item",
			args: {
				input: nonNull("ItemWhereUniqueInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.update({
					data: {
						score: {
							increment: 1,
						},
					},
					where: {
						id: args.input.id,
					},
				});
			},
		});
		t.field("unvoteItem", {
			type: "Item",
			args: {
				input: nonNull("ItemWhereUniqueInput"),
			},
			resolve: (_, args, ctx) => {
				return prisma.item.update({
					data: {
						score: {
							decrement: 1,
						},
					},
					where: {
						id: args.input.id,
					},
				});
			},
		});
	},
});
