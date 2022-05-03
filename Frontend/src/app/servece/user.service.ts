import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface user{
  id:number,
  name:string,
  email:string
  }


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {    }

  getUser(){
    return this.http.get<user[]>("http://localhost:3000/users")
  }

}
