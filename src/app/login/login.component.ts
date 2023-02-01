import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { LoginService} from "../login.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginError = '';
  public user: User
  form: FormGroup

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    this.user = {username: '', password: '', token: ''}
    this.form = formBuilder.group({})
  }

  login(): void {
    this.user = this.form.value
    if (this.loginService.checkLogin(this.user)) location.assign("./employees")
    else this.loginError = "Benutzername oder Passwort falsch!"
  }

  resetPassword(): void {
    // Password can't be reset due to issues with the backend!
    this.loginError = "FEHLER, Passwort nicht vergessbar"
    console.log("Passwort vergessen");
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
      token: ['']
    })

    this.user = {username: '', password: '', token: ''}
  }

}
