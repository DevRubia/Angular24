import { Component } from '@angular/core';
import { ApiService } from 'src/app/backend/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

//declare variables
  username : string = '';
  displayName : string = '';
  email : string = '';
  password : string = '';
  CountryCode : string = '';
  phone : string = '';

constructor(private Auth : ApiService){}

//register method
register(){
  this.Auth.register(this.email,this.password);
}

}
