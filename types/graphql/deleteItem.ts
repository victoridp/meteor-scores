/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ItemWhereUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: deleteItem
// ====================================================

export interface deleteItem_deleteItem {
  __typename: "Item";
  id: string;
  name: string;
  score: number;
}

export interface deleteItem {
  deleteItem: deleteItem_deleteItem | null;
}

export interface deleteItemVariables {
  input: ItemWhereUniqueInput;
}
