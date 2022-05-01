import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataArray: any
  baseURL: string = 'http://localhost:3000/';
  role:any
  
  constructor(private http: HttpClient) { 
    this.role=sessionStorage.getItem("role");
    console.log(this.role)

    this.http.get(this.baseURL+'api/user/users').subscribe(data =>{
      this.dataArray=data
    // this.role=this.dataArray.role
    });
    
  }

  ngOnInit(): void {
  }

}
