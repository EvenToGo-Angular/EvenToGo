import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  monObjet:any
  dataArray: any
  baseURL: string = 'http://localhost:3000/';
  values = JSON.parse(localStorage.getItem('store_owner_ad_contacts')!);
  constructor(private http: HttpClient) { 
    // this.use=JSON.parse(localStorage.getItem("user"));
    console.log(this.values)

    this.http.get(this.baseURL+'api/user/users').subscribe(data =>this.dataArray=data);
  }

  ngOnInit(): void {
  }

}
