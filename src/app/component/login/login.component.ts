import { Component } from '@angular/core';
import { ApiService } from '../../backend/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //declare variables
  email : string = '';
  password : string = '';

  //inject the service
  constructor(private Auth : ApiService){}


  login(){
 if(this.email == ''){
alert('Please enter your Email');
return;
 }

 if(this.password == ''){
  alert('please enter your password');
  return;
 }

 this.Auth.login(this.email,this.password);
 this.email = '';
 this.password ='';

}
   

}
