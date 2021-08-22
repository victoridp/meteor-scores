/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemWhereUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: voteItem
// ====================================================

export interface voteItem_voteItem {
  __typename: "Item";
  id: string;
  name: string;
  score: number;
}

export interface voteItem {
  voteItem: voteItem_voteItem | null;
}

export interface voteItemVariables {
  input: ItemWhereUniqueInput;
}
