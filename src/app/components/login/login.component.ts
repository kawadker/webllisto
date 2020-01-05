import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  localstorage = localStorage
  isSubmit = false;
  failureRes: any;
  isSuccess=false;
  constructor(
    private builder: FormBuilder,
    private apiservice: ApiService,
    private authservice: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._buildForm()
  }

  _buildForm() {
    this.loginForm = this.builder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  login(userData) {
    this.isSubmit = true;
    if (userData.valid) {
      this.apiservice.login(userData.value).subscribe(res => {
        this.isSubmit = false;
        if (res && res['token']) {
          this.isSuccess = true
          this.authservice.setStorage(res['token'])
          this.router.navigate(['main/home'])
        } else {
          this.failureRes=res['user']
        }
      }),(err=>{
        this.isSubmit = false;
        console.log(err);
        
      })
    }

  }




}
