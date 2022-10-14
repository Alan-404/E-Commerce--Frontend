import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN_ACCOUNT } from '../graphql/account';
import { LoginData, ResponseLoginAccount } from '../interfaces/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private apollo: Apollo
  ) { }


  loginAccount(loginData: LoginData){
    return this.apollo.mutate<ResponseLoginAccount>({
      mutation: LOGIN_ACCOUNT,
      variables: loginData,

    })
  }
}
