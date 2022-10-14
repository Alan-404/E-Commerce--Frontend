import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { REGISTER_USER } from '../graphql/user';
import { RegisterUserDTO, ResponseRegisterUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) { }

  registerUser(registerData: RegisterUserDTO){
    console.log(registerData)
    return this.apollo.mutate<ResponseRegisterUser>({
      mutation: REGISTER_USER,
      variables: registerData
    })
  }

  saveAvatar(avatar: any, userId: String):Observable<boolean>{
    var formData = new FormData()
    formData.append("avatar", avatar)
    formData.append("id", String(userId))
    return this.http.post<boolean>(`http://localhost:8000/user/media`, formData)
  }
}
