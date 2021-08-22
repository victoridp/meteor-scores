/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateItemInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createItem
// ====================================================

export interface createItem_createItem {
  __typename: "Item";
  id: string;
  name: string;
  score: number;
}

export interface createItem {
  createItem: createItem_createItem | null;
}

export interface createItemVariables {
  input: CreateItemInput;
}
