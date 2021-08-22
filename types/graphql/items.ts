/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: items
// ====================================================

export interface items_items {
  __typename: "Item";
  id: string;
  name: string;
  score: number;
}

export interface items {
  items: items_items[] | null;
}
