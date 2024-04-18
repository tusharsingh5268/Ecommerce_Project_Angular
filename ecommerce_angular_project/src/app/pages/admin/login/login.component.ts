import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  loginObj:any={
    userName:"",
    password:""
  }


  //When user click on login page
  onLoginClick(){
    if(this.loginObj.userName === 'admin' && this.loginObj.password === 'admin'){
      this.router.navigate(["/layout"])
    }else{
      alert("Wrong Credentials")
    }
  }
}
