import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login() {
    // http post api
    this.isLoggedIn = true;
  }

  logout() {
    // http post api
    this.isLoggedIn = false;
  }
}
