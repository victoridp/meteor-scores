import { items_items } from "./graphql/items";

export type Item = items_items & {
	rank: number;
	position: string;
};
