import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
}) 
export class ApiService {


  constructor(private fireAuth: AngularFireAuth,private router : Router) { }

//login method
login(email : string, password : string){

  this.fireAuth.signInWithEmailAndPassword(email,password).then ( () =>{
    localStorage.setItem('token','true');
    this.router.navigate(['/dashboard']);
    console.log('User logged in successfully');
    
  }, err => {
    alert('Something went wrong');
    this.router.navigate(['/login']);
  })

}
  
 //register method
 register(email : string, password : string){
  this.fireAuth.createUserWithEmailAndPassword(email,password).then( () => {
    this.router.navigate(['/login']);
    console.log('User registered successfully');
  },err => {
    alert('Something went wrong');
    this.router.navigate(['/register']);
  })

}
  //logout method
  logout(){
this.fireAuth.signOut(). then (() => {
localStorage.removeItem('token');
this.router.navigate(['/login']);
console.log('User logged out successfully');
})}

}
