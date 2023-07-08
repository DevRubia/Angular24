import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// import { NavbarComponent }  from './navbar/navbar.component';
// import { LoginComponent } from './component/login/login.component';
// import { RegisterComponent } from './component/register/register.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';
import { routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
