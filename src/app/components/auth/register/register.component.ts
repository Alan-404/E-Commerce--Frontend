import { Component, OnInit } from '@angular/core';
import { RegisterUserDTO } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imageShow: any = "https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png"

  registerData: RegisterUserDTO = {firstName: '', lastName: '', address: '',bdate: '', email: '', gender: '', password: '', phone: '', role: false, avatar: '' }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getData(event: Event){
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value
    if (name == "firstName" || name == "lastName" || name == "address" || name == "bdate" || name=='email' || name=='gender' || name=='password' || name=='phone'){
      this.registerData[name] = value
    }
  }

  getGender(value: String){
    this.registerData.gender = value
  }

  uploadImage(event: any){
    const file = event.target.files[0]

    this.registerData.avatar = file

    var reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = _event => {
      this.imageShow = reader.result
    }
    
  }

  async submit(){
    console.log(this.registerData)
    await this.userService.registerUser(this.registerData).subscribe(async(response) => {
      if (response.data){
        const data = response.data.registerUser
        if (data.success){
          const test = await this.userService.saveAvatar(this.registerData.avatar, data.user.id)
          console.log(test)
        }
      }
    })
  }

  

}
