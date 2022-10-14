import { gql } from "apollo-angular";

export const REGISTER_USER = gql`
    mutation ($firstName: String!, $lastName: String!, $phone: String!, $gender: String!, $email: String!, $address: String!, $password: String!, $role: Boolean!, $bdate: Date!, $avatar:Upload!){
        registerUser(registerData: {
            firstName: $firstName,
            lastName: $lastName,
            phone: $phone,
            gender: $gender,
            email: $email,
            address: $address,
            password: $password,
            role: $role,
            bdate: $bdate,
            avatar: $avatar
        }){
            success,
            user{
                id
            }
        }
    }
`
