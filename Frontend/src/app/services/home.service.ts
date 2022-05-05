import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  events:any = []

  constructor(private http : HttpClient) { }
  public getAllEvents(){
    this.events = this.http.get<any>("http://localhost:3000/api/event/selectAll");
    console.log(this.events)
    return this.events;
  }
  public deleteEvent(id:number){
    return this.http.delete(`http://localhost:3000/api/event/delete/${id}`)
  }
  public updatePlaces(id: any,places:any){
    console.log(id, places);
    return this.http.put(`http://localhost:3000/api/event/modif/${id}`,{places:places})
  }
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
