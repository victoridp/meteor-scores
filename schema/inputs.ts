import { inputObjectType } from "nexus";

export const CreateItemInput = inputObjectType({
	name: "CreateItemInput",
	definition(t) {
		t.nonNull.string("name");
		t.nonNull.int("score");
	},
});
export const VoteItemInput = inputObjectType({
	name: "VoteItemInput",
	definition(t) {
		t.nonNull.id("itemId");
	},
});