import gql from 'graphql-tag';

export const customProductApiExtension = gql`
    extend type Query {
        getProductsByCollection(collectionId: ID!): [ProductVariant!]!
    }
`;