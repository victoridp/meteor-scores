import { gql } from "@apollo/client";

export const ITEMS = gql`
    query items{
        items {
            id
            name
            score
        }
    }
`