import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const GET_USER_DELETE = gql`
  mutation userDelete($id: Int!) {
    userDelete(id: $id) {
      id
    }
  }
`;
export const USER_UPDATE = gql`
  mutation userUpdate(
    $id: Int!
    $name: String!
    $email: String!
    $password: String!
    $status: String!
  ) {
    userUpdate(
      id: $id
      name: $name
      email: $email
      password: $password
      status: $status
    ) {
      id
      name
      email
      password
      status
    }
  }
`;
export const USER_CREATE = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $status: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      status: $status
    ) {
      id
      name
      email
      password
      status
    }
  }
`;
