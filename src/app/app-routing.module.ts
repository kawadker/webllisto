import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '././services/auth-guard.service';
import { HomeComponent } from '././components/home/home.component';
import { LoginComponent } from '././components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FirstComponent } from './components/first/first.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'},
    {
    path: 'main', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'layout', component:  FirstComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
