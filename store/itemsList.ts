import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import numeral from "numeral";
import { UNVOTE_ITEM, VOTE_ITEM } from "../graphql/mutations";
import { ITEMS } from "../graphql/queries";
import client from "../lib/apolloClient";
import { Item } from "../types/common";
import { items, items_items } from "../types/graphql/items";
import { unvoteItem, unvoteItemVariables } from "../types/graphql/unvoteItem";
import { voteItem, voteItemVariables } from "../types/graphql/voteItem";
import { RootState } from "./index";

const SLICE_NAME = "sampleFeature";

type ItemsList = {
	items: items_items[];
	loading: boolean;
	voting: boolean;
};

const initialState: ItemsList = {
	items: [],
	loading: false,
	voting: false,
};

export const getItems = createAsyncThunk(
	`${SLICE_NAME}/sampleAction`,
	async () => {
		const { data } = await client.query<items>({
			query: ITEMS,
		});
		return data.items;
	}
);

export const addVote = createAsyncThunk(`${SLICE_NAME}/addVote`, async (args: {itemId: string}) => {
	const { data } = await client.mutate<voteItem, voteItemVariables>({
		mutation: VOTE_ITEM,
		variables: {
			input: {
				itemId: args.itemId
			}
		}
	});
	return data?.voteItem;
});

export const removeVote = createAsyncThunk(
	`${SLICE_NAME}/removeVote`,
	async (args: {itemId: string}) => {
		const { data } = await client.mutate<unvoteItem, unvoteItemVariables>({
			mutation: UNVOTE_ITEM,
			variables: {
				input: {
					itemId: args.itemId
				}
			}
		});
		return data?.unvoteItem;
	}
);

export const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getItems.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getItems.fulfilled, (state, action) => {
			state.loading = false;
			state.items = action.payload!;
		});
		builder.addCase(getItems.rejected, (state, action) => {
			state.loading = false;
		});
		builder.addMatcher(isPending(addVote, removeVote), (state, action) => {
			state.voting = true;
		});
		builder.addMatcher(isFulfilled(addVote, removeVote), (state, action) => {
			const idx = state.items.findIndex(i => i.id === action.payload?.id);
			state.items[idx].score = action.payload?.score!
			state.voting = false
		});
		builder.addMatcher(isRejected(addVote, removeVote), (state, action) => {
			state.voting = false
		});
	},
});

export default slice.reducer;
export const {} = slice.actions;
export const selectItemsList = (state: RootState) => state.itemsList;
export const selectItems = (state: RootState): Item[] => {
	let rank = 1;
	const { items } = state.itemsList;
	return items.map((item, index) => {
		if (index !== 0 && items[index - 1].score > item.score) {
			rank++;
		}

		return {
			...item,
			rank,
			position: numeral(rank).format("0o"),
		};
	}).sort((a, b) => a.score < b.score ? 1 : -1);
};
