import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts:any = []

  constructor(private http : HttpClient) { }

  public getContacts(){
    this.contacts = this.http.get<any>("http://localhost:3000/api/contact/AllContacts");
    console.log(this.contacts)
    return this.contacts;
  }
  public deleteContact(id:number){
    return this.http.delete(`http://localhost:3000/api/contact/delete/${id}`)
  }
}
