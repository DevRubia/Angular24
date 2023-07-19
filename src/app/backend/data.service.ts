import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private FireStore : AngularFirestore) { }

  //start of crud operations
  
  //addUser method
 addUserKeys(user : User){
  user.id = this.FireStore.createId();
return this.FireStore.collection('/users').add(user);
 } 

 //getAllUsers method
  getAllUsers(){
    return this.FireStore.collection('/users').snapshotChanges();
  }

//detele a User method(Delete)
 deleteUser(user : User){
 return this.FireStore.doc('/users' + user.id).delete(); 
}




}