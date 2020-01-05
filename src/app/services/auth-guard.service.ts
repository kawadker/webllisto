import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate() {
      if (this.authService.isLogedIn()) {
          return true;
      } else {
          this.router.navigate(['main/login']);
          return false;
      }
  }
}
