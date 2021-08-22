import { objectType } from "nexus";

export const Item = objectType({
	name: "Item",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("name");
		t.nonNull.int("score");
	},
});
