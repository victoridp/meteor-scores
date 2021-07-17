/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VoteItemInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: unvoteItem
// ====================================================

export interface unvoteItem_unvoteItem {
  __typename: "Item";
  id: string;
  name: string;
  score: number;
}

export interface unvoteItem {
  unvoteItem: unvoteItem_unvoteItem | null;
}

export interface unvoteItemVariables {
  input: VoteItemInput;
}
