import { Injectable } from '@angular/core';
import { USERS} from "./mockup-user";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  checkLogin(user: User, token: string): boolean {
    let found: boolean = false

    USERS.forEach((value: User) => {
      if (value.username === user.username && value.password === user.password) {
        found = true
        localStorage.setItem('access_token', token);
      }
    })
    return found
  }

}
