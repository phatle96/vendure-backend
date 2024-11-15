import gql from 'graphql-tag';

export const adminNotiApiExtension = gql`

    extend type Mutation {
        sendNotifications(
            userId: [ID!]!,
            subject: String, 
            message: String
            ): Boolean!
    }
`;