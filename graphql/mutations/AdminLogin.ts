import { gql } from "@apollo/client";


export const Admin_Login= gql`
mutation AdminLogin($email: String!, $password: String!) {
  adminLogin(email: $email, password: $password) {
    id
    email
    token
    message
    success
  }
}
`;