import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'dashboard',component: DashboardComponent},
{path:'navbar', component: NavbarComponent},
{path:'**',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,DashboardComponent,NavbarComponent]
