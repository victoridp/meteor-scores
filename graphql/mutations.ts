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

export const VOTE_ITEM = gql`
	mutation voteItem($input: VoteItemInput!) {
		voteItem(input: $input) {
			id
			name
			score
		}
	}
`;

export const UNVOTE_ITEM = gql`
	mutation unvoteItem($input: VoteItemInput!) {
		unvoteItem(input: $input) {
			id
			name
			score
		}
	}
`;
