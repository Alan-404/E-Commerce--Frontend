import { gql } from "apollo-angular";


export const LOGIN_ACCOUNT = gql`
    mutation loginAccount($email: String!, $password: String!){
        loginAccount(loginData: {
            email: $email,
            password: $password
        }){
            success,
            accessToken
        }
    }
`