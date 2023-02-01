import { Injectable } from '@angular/core';
import { USERS} from "./mockup-user";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  checkLogin(user: User): boolean {
    let found: boolean = false
    console.log(user.token)
    USERS.forEach((value: User) => {
      if ((value.username === user.username && value.password === user.password) || !!user.token) {
        found = true
        localStorage.setItem('access_token', user.token);
      }
    })
    return found
  }

}
