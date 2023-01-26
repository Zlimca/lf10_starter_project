import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User
  public token: string = ''
  constructor(private loginService: LoginService) {
    this.user = {username: '', password: ''}
  }

  login(): void {
    if (this.loginService.checkLogin(this.user, this.token)) location.assign("./employees")
    else console.log("User or password is incorrect!")
  }

  resetPassword(): void {
    // Password can't be reset due to issues with the backend!
    console.log("Passwort vergessen");
  }

  ngOnInit(): void {
    this.user = {username: '', password: ''}
  }

}
