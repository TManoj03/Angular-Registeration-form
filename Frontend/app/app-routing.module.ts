import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { TestCanActivate } from './services/gaurds/gaurd';


const routes: Routes = [
	{ path:'',component:LoginRegisterComponent },
	{ path:'login',component:LoginRegisterComponent },
	{ path:'dashboard',component:DashboardComponent }  // ,canActivate:[TestCanActivate]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
