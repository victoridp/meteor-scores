import { gql } from "@apollo/client";

export const CREATE_ITEM = gql`
	mutation createItem($input: CreateItemInput!) {
		createItem(input: $input) {
			id
			name
			score
		}
	}
`;

export const DELETE_ITEM = gql`
	mutation deleteItem($input: ItemWhereUniqueInput!) {
		deleteItem(input: $input) {
			id
			name
			score
		}
	}
`;

export const VOTE_ITEM = gql`
	mutation voteItem($input: ItemWhereUniqueInput!) {
		voteItem(input: $input) {
			id
			name
			score
		}
	}
`;

export const UNVOTE_ITEM = gql`
	mutation unvoteItem($input: ItemWhereUniqueInput!) {
		unvoteItem(input: $input) {
			id
			name
			score
		}
	}
`;
