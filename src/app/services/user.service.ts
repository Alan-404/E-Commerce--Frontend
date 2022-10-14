import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { REGISTER_USER } from '../graphql/user';
import { RegisterUserDTO } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) { }

  registerUser(registerData: RegisterUserDTO){
    return this.apollo.mutate<any>({
      mutation: REGISTER_USER,
      variables: registerData
    })
  }

  saveAvatar(avatar: any, userId: String){
    const script = `
    {"query": "mutation uploadFile($file:Upload!, $userId:String!){
        uploadFile(file:$file, userId:$userId){success}
    }", 
        "variables": {"file":null, "userId": ${userId}}}
`
    var formData = new FormData()
    formData.append("operations", script)
    formData.append("map", `{"0": ["variables.file"]}`)
    formData.append("0", avatar)
    return this.http.post(`http://localhost:8000/graphql`, formData)
  }
}
