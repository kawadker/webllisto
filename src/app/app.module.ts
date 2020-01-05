import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { PubSubModule } from 'angular7-pubsub'; 

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { MainComponent } from './components/main/main.component';
import { FirstComponent } from './components/first/first.component';
const JWT_Module_Options = {
  config: {
    tokenGetter: JSON.parse(localStorage.getItem("token"))
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, HttpClientModule, JwtModule,
    CollapseModule.forRoot(),
    JwtModule.forRoot(JWT_Module_Options),
    PubSubModule.forRoot()
  ],
  providers: [
    AuthService, AuthService, ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
