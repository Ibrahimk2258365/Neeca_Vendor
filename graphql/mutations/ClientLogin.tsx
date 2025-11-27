// graphql/mutations/ClientLogin.ts
import { gql } from "@apollo/client";

export const CLIENT_LOGIN = gql`
  mutation ClientLogin($email: String!, $password: String!) {
    clientLogin(email: $email, password: $password) {
      id
      email
      token
      status
      success
      message
    }
  }
`;
