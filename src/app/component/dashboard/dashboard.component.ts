import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/backend/api.service';
import { User } from '../../model/user';
import { DataService} from '../../backend/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

usersList : User [] =  [];
id : string = '';
email : string = '';
firstName : string = '';
lastName : string = '';
phoneNumber : string = '';


  constructor(private Auth : ApiService,private db : DataService) { }

  ngOnInit() {}

  logout(){
    this.Auth.logout();

  }

  //getAllUsers method
getAllUsers(){
 this.db.getAllUsers().subscribe((res) => {
 
  this.usersList = res.map((e : any) =>{
    const data = e.payload.doc.data();
    data.id = e.payload.doc.id;
    return data;
  })

  , (err : Error) => {
    console.log('getAllUsers Query Error');
  } 
  })
}

}
