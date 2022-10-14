import { Component, OnInit } from '@angular/core';
import { LoginData, ResponseLoginAccount } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData = {email: "", password: ""}

  responseLoginAccount: ResponseLoginAccount = {success: false, accessToken: ""}

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  getData(event: Event){
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value
    if (name == "email" || name == "password"){
      this.loginData[name] = value
    }
  }

  submit(){
    this.accountService.loginAccount(this.loginData).subscribe(response => {
      if (response.data){
        const data = response.data
        if (data.success){
          
        }
      }
    })
  }
}
