import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/backend/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  constructor(private Auth : ApiService) { }

  ngOnInit() {}

  logout(){
    this.Auth.logout();

  }
}
