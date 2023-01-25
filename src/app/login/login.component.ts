import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { LoginService} from "../login.service";
import {USERS} from "../mockup-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = {username: '', password: ''}
  public token: string = ''
  constructor(private loginService: LoginService) { }

  login(): void {
    // TODO: Login funktion
    location.assign("./employees");
  }

  resetPassword(): void {
    // Password can't be reset due to issues with the backend!
    console.log("Passwort vergessen");
  }

  ngOnInit(): void {

  }

}
