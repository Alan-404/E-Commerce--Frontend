import { Account } from "../models/account"
import { User } from "../models/user"

export interface RegisterUserDTO{
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    email: String,
    bdate: String,
    gender: String,
    password: String,
    role: boolean,
    avatar: any
}


export interface InfoResponseRegisterUser{
    success: boolean,
    user: User,
    account: Account
}

export interface ResponseRegisterUser{
    registerUser: InfoResponseRegisterUser
}



