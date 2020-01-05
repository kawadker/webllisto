import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: any = [
    { name: "Main", path: "main/layout" },
    { name: "Home", path: "main/home" },
  ]
  user: any;
  constructor(
    private router: Router,
    public authservice: AuthService
  ) {

  }
  ngOnInit(): void {
    this.router.navigate(['main/layout'])
  }
  getCurrentUser() {
    if (this.authservice.isLogedIn()) {
      return JSON.parse(sessionStorage.getItem('userObj'))['username']
    }
  }

  logout(rout) {
    if (rout == 'login') {
      this.router.navigate(['main/login'])
    } else {
      this.authservice.logout();
      this.router.navigate(['main/layout'])
    }
  }

}
