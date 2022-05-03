import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from "@auth0/angular-jwt";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  dataArray: any;
  baseURL: string = 'http://localhost:3000/';
  values = JSON.parse(localStorage.getItem('store_owner_ad_contacts')!);
  formBuilder: any;
  constructor(private http: HttpClient) { 
     //this.use=JSON.parse(localStorage.getItem("user"));
    console.log(this.values)
  role: any;

  const adminForm = this.formBuilder.group({
    name:'',
    email: '',
    password: '',
    role: 'admin',
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.role = sessionStorage.getItem('role');
    console.log(this.role);

    this.http.get(this.baseURL + 'api/user/users').subscribe((data) => {
      this.dataArray = data;
      // this.role=this.dataArray.role
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    let person = this.adminForm.value;

    this.http
      .post(this.baseURL + 'api/user/signup', person)
      .subscribe((response) => console.log('yess'));
  }
}
