import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userObj;
  localstorage = localStorage
  constructor(
    public jwtHelper: JwtHelperService
  ) {
  }
  isLogedIn() {
    let token = JSON.parse(localStorage.getItem('token'));
    let userObj = JSON.parse(localStorage.getItem('userObj'));
    if (userObj && !this.jwtHelper.isTokenExpired(token)) {
      return true
    } else {
      return false;
    };
  }
  getData(token) {
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken;
  }

  setStorage(token) {
    token = 'JWT ' + token
    let data = this.getData(token)
    this.localstorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("token", JSON.stringify(token));
    this.localstorage.setItem("userObj", JSON.stringify(data));
    sessionStorage.setItem("userObj", JSON.stringify(data));
  }

  logout() {
    this.localstorage.clear();
    sessionStorage.clear();
  }

}
