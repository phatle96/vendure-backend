import gql from 'graphql-tag';

const novuApiExtensions = gql`

  extend type Query {
    myNewQuery(id: ID!): Boolean!
    subscriberQuery(id: ID!): Subscriber
  }

  extend type Mutation {
    myNewMutation(id: ID!): Boolean!
    subscriberCredentialsMutation(
      id: ID!, 
      providerIdEnum: String!,
      providerId: String!, 
      credentials: UpdateSubscriberCredentials!): Subscriber
  }


  type Subscriber implements Node {
    id: ID!
    subscriberId: String
    firstName: String
    lastName: String
    email: String
    phone: String
    isOnline: Boolean
    lastOnlineAt: String
    deleted: Boolean
    createdAt: String
    updatedAt: String
    channels: [SubscriberChannel]
  }

  type SubscriberChannel {
    _integrationId: String
    providerId: String
    credentials: SubscriberCredential
  }

  type SubscriberCredential {
    title: String
    webhookUrl: String
    channel: String
    deviceTokens: [String]
  }

  input UpdateSubscriberCredentials{
    webhookUrl: String
    deviceTokens: [String]
  }

`;
export const apiExtensions = gql`
  ${novuApiExtensions}
`;
